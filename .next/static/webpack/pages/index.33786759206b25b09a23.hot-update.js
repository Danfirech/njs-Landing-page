webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-drawer */ \"./src/components/header/mobile-drawer.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.js\");\n\n\nvar _jsxFileName = \"/Users/danielpossehl/Desktop/Projects/NEXT.js projects/njs-landingpage/njs-Landing-page/src/components/header/header.js\",\n    _templateObject;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\nfunction Header(_ref) {\n  var className = _ref.className;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"header\", {\n    sx: styles.header,\n    className: className,\n    id: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n}\n_c = Header;\nvar positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    position: fixed;\\n    opacity: 1;\\n  }\\n\\n  to {\\n    position: absolute;\\n    opacity: 1;\\n    transition: all 0.4s ease;\\n  }\\n\"])));\nvar styles = {\n  header: {\n    color: \"text\",\n    fontWeight: \"body\",\n    py: 4,\n    width: \"100%\",\n    position: \"absolute\",\n    top: 0,\n    left: 0,\n    backgroundColor: \"transparent\",\n    transition: \"all 0.4s ease\",\n    animation: \"\".concat(positionAnim, \" 0.4s ease\"),\n    \".donate__btn\": {\n      flexShrink: 0,\n      mr: [15, 20, null, null, 0],\n      ml: [\"auto\", null, null, null, 0]\n    },\n    \"&.sticky\": {\n      position: \"fixed\",\n      backgroundColor: \"background\",\n      color: \"#000000\",\n      boxShadow: \"0 1px 2px rgba(0, 0, 0, 0.06)\",\n      py: 3,\n      \"nev > a\": {\n        color: \"text\"\n      }\n    }\n  },\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\"\n  },\n  nav: {\n    mx: \"auto\",\n    display: \"none\",\n    \"@media screen and (min-width: 1024px)\": {\n      display: \"block\"\n    },\n    a: {\n      fontSize: 2,\n      fontWeight: \"body\",\n      px: 5,\n      cursor: \"pointer\",\n      lineHeight: \"1.2\",\n      transition: \"all 0.15s\",\n      \"&:hover\": {\n        color: \"primary\"\n      },\n      \"&.active\": {\n        color: \"primary\"\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcz8xMjBlIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsIkxvZ29EYXJrIiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicHkiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJhbmltYXRpb24iLCJmbGV4U2hyaW5rIiwibXIiLCJtbCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJuYXYiLCJteCIsImEiLCJmb250U2l6ZSIsInB4IiwiY3Vyc29yIiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQStCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzVDLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBMkIsYUFBUyxFQUFFRixTQUF0QztBQUFpRCxNQUFFLEVBQUMsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNFLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyx1REFBRDtBQUFNLE9BQUcsRUFBRUMsc0RBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERjtBQU9EO0tBUnVCTCxNO0FBVXhCLElBQU1NLFlBQVksR0FBR0MsK0RBQUgsZ1NBQWxCO0FBYUEsSUFBTUwsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNOSyxTQUFLLEVBQUUsTUFERDtBQUVOQyxjQUFVLEVBQUUsTUFGTjtBQUdOQyxNQUFFLEVBQUUsQ0FIRTtBQUlOQyxTQUFLLEVBQUUsTUFKRDtBQUtOQyxZQUFRLEVBQUUsVUFMSjtBQU1OQyxPQUFHLEVBQUUsQ0FOQztBQU9OQyxRQUFJLEVBQUUsQ0FQQTtBQVFOQyxtQkFBZSxFQUFFLGFBUlg7QUFTTkMsY0FBVSxFQUFFLGVBVE47QUFVTkMsYUFBUyxZQUFLWCxZQUFMLGVBVkg7QUFXTixvQkFBZ0I7QUFDZFksZ0JBQVUsRUFBRSxDQURFO0FBRWRDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FGVTtBQUdkQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0I7QUFIVSxLQVhWO0FBZ0JOLGdCQUFZO0FBQ1ZSLGNBQVEsRUFBRSxPQURBO0FBRVZHLHFCQUFlLEVBQUUsWUFGUDtBQUdWUCxXQUFLLEVBQUUsU0FIRztBQUlWYSxlQUFTLEVBQUUsK0JBSkQ7QUFLVlgsUUFBRSxFQUFFLENBTE07QUFNVixpQkFBVztBQUNURixhQUFLLEVBQUU7QUFERTtBQU5EO0FBaEJOLEdBREs7QUE0QmJKLFdBQVMsRUFBRTtBQUNUa0IsV0FBTyxFQUFFLE1BREE7QUFFVEMsY0FBVSxFQUFFLFFBRkg7QUFHVEMsa0JBQWMsRUFBRTtBQUhQLEdBNUJFO0FBaUNiQyxLQUFHLEVBQUU7QUFDSEMsTUFBRSxFQUFFLE1BREQ7QUFFSEosV0FBTyxFQUFFLE1BRk47QUFHSCw2Q0FBeUM7QUFDdkNBLGFBQU8sRUFBRTtBQUQ4QixLQUh0QztBQU1ISyxLQUFDLEVBQUU7QUFDREMsY0FBUSxFQUFFLENBRFQ7QUFFRG5CLGdCQUFVLEVBQUUsTUFGWDtBQUdEb0IsUUFBRSxFQUFFLENBSEg7QUFJREMsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURmLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RSLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkE7QUFqQ1EsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcImNvbXBvbmVudHMvbG9nb1wiO1xuaW1wb3J0IExvZ29EYXJrIGZyb20gXCJhc3NldHMvbG9nby5zdmdcIjtcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSBcIi4vbW9iaWxlLWRyYXdlclwiO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9oZWFkZXIuZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxMb2dvIHNyYz17TG9nb0Rhcmt9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcjoge1xuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICBweTogNCxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjRzIGVhc2VcIixcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcbiAgICBcIi5kb25hdGVfX2J0blwiOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgICBcIiYuc3RpY2t5XCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgICBweTogMyxcbiAgICAgIFwibmV2ID4gYVwiOiB7XG4gICAgICAgIGNvbG9yOiBcInRleHRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gIH0sXG4gIG5hdjoge1xuICAgIG14OiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIjoge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICAgIHB4OiA1LFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS4yXCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgfSxcbiAgICAgIFwiJi5hY3RpdmVcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/header.js\n");

/***/ })

})