"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui";
exports.ids = ["vendor-chunks/@radix-ui"];
exports.modules = {

/***/ "(ssr)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRefs: () => (/* binding */ composeRefs),\n/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n// packages/react/compose-refs/src/composeRefs.tsx\n\nfunction setRef(ref, value) {\n  if (typeof ref === \"function\") {\n    ref(value);\n  } else if (ref !== null && ref !== void 0) {\n    ref.current = value;\n  }\n}\nfunction composeRefs(...refs) {\n  return (node) => refs.forEach((ref) => setRef(ref, node));\n}\nfunction useComposedRefs(...refs) {\n  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUMrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhDQUFpQjtBQUMxQjtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzL2Rpc3QvaW5kZXgubWpzPzIwOGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvY29tcG9zZS1yZWZzL3NyYy9jb21wb3NlUmVmcy50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gc2V0UmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocmVmICE9PSBudWxsICYmIHJlZiAhPT0gdm9pZCAwKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gY29tcG9zZVJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gKG5vZGUpID0+IHJlZnMuZm9yRWFjaCgocmVmKSA9PiBzZXRSZWYocmVmLCBub2RlKSk7XG59XG5mdW5jdGlvbiB1c2VDb21wb3NlZFJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soY29tcG9zZVJlZnMoLi4ucmVmcyksIHJlZnMpO1xufVxuZXhwb3J0IHtcbiAgY29tcG9zZVJlZnMsXG4gIHVzZUNvbXBvc2VkUmVmc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@radix-ui/react-label/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@radix-ui/react-label/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Label: () => (/* binding */ Label),\n/* harmony export */   Root: () => (/* binding */ Root)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-primitive */ \"(ssr)/./node_modules/@radix-ui/react-primitive/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ Label,Root auto */ // packages/react/label/src/Label.tsx\n\n\n\nvar NAME = \"Label\";\nvar Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.Primitive.label, {\n        ...props,\n        ref: forwardedRef,\n        onMouseDown: (event)=>{\n            const target = event.target;\n            if (target.closest(\"button, input, select, textarea\")) return;\n            props.onMouseDown?.(event);\n            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();\n        }\n    });\n});\nLabel.displayName = NAME;\nvar Root = Label;\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWxhYmVsL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QjtBQUNHO0FBY3RCO0FBUkosSUFBTUcsT0FBTztBQU1iLElBQU1DLHNCQUFjSiw2Q0FBQSxDQUFxQyxDQUFDTSxPQUFPQztJQUMvRCxPQUNFLGdCQUFBTCxzREFBQUEsQ0FBQ0QsZ0VBQVNBLENBQUNPLEtBQUEsRUFBVjtRQUNFLEdBQUdGLEtBQUE7UUFDSkcsS0FBS0Y7UUFDTEcsYUFBYSxDQUFDQztZQUVaLE1BQU1DLFNBQVNELE1BQU1DLE1BQUE7WUFDckIsSUFBSUEsT0FBT0MsT0FBQSxDQUFRLG9DQUFvQztZQUV2RFAsTUFBTUksV0FBQSxHQUFjQztZQUVwQixJQUFJLENBQUNBLE1BQU1HLGdCQUFBLElBQW9CSCxNQUFNSSxNQUFBLEdBQVMsR0FBR0osTUFBTUssY0FBQTtRQUN6RDtJQUFBO0FBR047QUFFQVosTUFBTWEsV0FBQSxHQUFjZDtBQUlwQixJQUFNZSxPQUFPZCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4uL3NyYy9MYWJlbC50c3g/OGJhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlJztcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTGFiZWxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgTkFNRSA9ICdMYWJlbCc7XG5cbnR5cGUgTGFiZWxFbGVtZW50ID0gUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgUHJpbWl0aXZlLmxhYmVsPjtcbnR5cGUgUHJpbWl0aXZlTGFiZWxQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgUHJpbWl0aXZlLmxhYmVsPjtcbmludGVyZmFjZSBMYWJlbFByb3BzIGV4dGVuZHMgUHJpbWl0aXZlTGFiZWxQcm9wcyB7fVxuXG5jb25zdCBMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8TGFiZWxFbGVtZW50LCBMYWJlbFByb3BzPigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcmltaXRpdmUubGFiZWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHJlZj17Zm9yd2FyZGVkUmVmfVxuICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAvLyBvbmx5IHByZXZlbnQgdGV4dCBzZWxlY3Rpb24gaWYgY2xpY2tpbmcgaW5zaWRlIHRoZSBsYWJlbCBpdHNlbGZcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKSkgcmV0dXJuO1xuXG4gICAgICAgIHByb3BzLm9uTW91c2VEb3duPy4oZXZlbnQpO1xuICAgICAgICAvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uIHdoZW4gZG91YmxlIGNsaWNraW5nIGxhYmVsXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiBldmVudC5kZXRhaWwgPiAxKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufSk7XG5cbkxhYmVsLmRpc3BsYXlOYW1lID0gTkFNRTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBSb290ID0gTGFiZWw7XG5cbmV4cG9ydCB7XG4gIExhYmVsLFxuICAvL1xuICBSb290LFxufTtcbmV4cG9ydCB0eXBlIHsgTGFiZWxQcm9wcyB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJpbWl0aXZlIiwianN4IiwiTkFNRSIsIkxhYmVsIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiZm9yd2FyZGVkUmVmIiwibGFiZWwiLCJyZWYiLCJvbk1vdXNlRG93biIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJkZXRhaWwiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXlOYW1lIiwiUm9vdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@radix-ui/react-label/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@radix-ui/react-primitive/dist/index.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@radix-ui/react-primitive/dist/index.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Primitive: () => (/* binding */ Primitive),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   dispatchDiscreteCustomEvent: () => (/* binding */ dispatchDiscreteCustomEvent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/primitive/src/Primitive.tsx\n\n\n\n\nvar NODES = [\n  \"a\",\n  \"button\",\n  \"div\",\n  \"form\",\n  \"h2\",\n  \"h3\",\n  \"img\",\n  \"input\",\n  \"label\",\n  \"li\",\n  \"nav\",\n  \"ol\",\n  \"p\",\n  \"span\",\n  \"svg\",\n  \"ul\"\n];\nvar Primitive = NODES.reduce((primitive, node) => {\n  const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n    const { asChild, ...primitiveProps } = props;\n    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : node;\n    if (typeof window !== \"undefined\") {\n      window[Symbol.for(\"radix-ui\")] = true;\n    }\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });\n  });\n  Node.displayName = `Primitive.${node}`;\n  return { ...primitive, [node]: Node };\n}, {});\nfunction dispatchDiscreteCustomEvent(target, event) {\n  if (target) react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => target.dispatchEvent(event));\n}\nvar Root = Primitive;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDTztBQUNNO0FBQ0o7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFnQjtBQUMvQixZQUFZLDZCQUE2QjtBQUN6QywyQkFBMkIsc0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFHLFNBQVMsc0NBQXNDO0FBQzdFLEdBQUc7QUFDSCxrQ0FBa0MsS0FBSztBQUN2QyxXQUFXO0FBQ1gsQ0FBQyxJQUFJO0FBQ0w7QUFDQSxjQUFjLGdEQUFrQjtBQUNoQztBQUNBO0FBS0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUvZGlzdC9pbmRleC5tanM/ZjViNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9yZWFjdC9wcmltaXRpdmUvc3JjL1ByaW1pdGl2ZS50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG52YXIgTk9ERVMgPSBbXG4gIFwiYVwiLFxuICBcImJ1dHRvblwiLFxuICBcImRpdlwiLFxuICBcImZvcm1cIixcbiAgXCJoMlwiLFxuICBcImgzXCIsXG4gIFwiaW1nXCIsXG4gIFwiaW5wdXRcIixcbiAgXCJsYWJlbFwiLFxuICBcImxpXCIsXG4gIFwibmF2XCIsXG4gIFwib2xcIixcbiAgXCJwXCIsXG4gIFwic3BhblwiLFxuICBcInN2Z1wiLFxuICBcInVsXCJcbl07XG52YXIgUHJpbWl0aXZlID0gTk9ERVMucmVkdWNlKChwcmltaXRpdmUsIG5vZGUpID0+IHtcbiAgY29uc3QgTm9kZSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCBmb3J3YXJkZWRSZWYpID0+IHtcbiAgICBjb25zdCB7IGFzQ2hpbGQsIC4uLnByaW1pdGl2ZVByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBub2RlO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3dbU3ltYm9sLmZvcihcInJhZGl4LXVpXCIpXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KENvbXAsIHsgLi4ucHJpbWl0aXZlUHJvcHMsIHJlZjogZm9yd2FyZGVkUmVmIH0pO1xuICB9KTtcbiAgTm9kZS5kaXNwbGF5TmFtZSA9IGBQcmltaXRpdmUuJHtub2RlfWA7XG4gIHJldHVybiB7IC4uLnByaW1pdGl2ZSwgW25vZGVdOiBOb2RlIH07XG59LCB7fSk7XG5mdW5jdGlvbiBkaXNwYXRjaERpc2NyZXRlQ3VzdG9tRXZlbnQodGFyZ2V0LCBldmVudCkge1xuICBpZiAodGFyZ2V0KSBSZWFjdERPTS5mbHVzaFN5bmMoKCkgPT4gdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpKTtcbn1cbnZhciBSb290ID0gUHJpbWl0aXZlO1xuZXhwb3J0IHtcbiAgUHJpbWl0aXZlLFxuICBSb290LFxuICBkaXNwYXRjaERpc2NyZXRlQ3VzdG9tRXZlbnRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@radix-ui/react-primitive/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@radix-ui/react-slot/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@radix-ui/react-slot/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   Slot: () => (/* binding */ Slot),\n/* harmony export */   Slottable: () => (/* binding */ Slottable)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/slot/src/Slot.tsx\n\n\n\nvar Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n  const { children, ...slotProps } = props;\n  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);\n  const slottable = childrenArray.find(isSlottable);\n  if (slottable) {\n    const newElement = slottable.props.children;\n    const newChildren = childrenArray.map((child) => {\n      if (child === slottable) {\n        if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);\n        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;\n      } else {\n        return child;\n      }\n    });\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });\n  }\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });\n});\nSlot.displayName = \"Slot\";\nvar SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n  const { children, ...slotProps } = props;\n  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {\n    const childrenRef = getElementRef(children);\n    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {\n      ...mergeProps(slotProps, children.props),\n      // @ts-ignore\n      ref: forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.composeRefs)(forwardedRef, childrenRef) : childrenRef\n    });\n  }\n  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;\n});\nSlotClone.displayName = \"SlotClone\";\nvar Slottable = ({ children }) => {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children });\n};\nfunction isSlottable(child) {\n  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === Slottable;\n}\nfunction mergeProps(slotProps, childProps) {\n  const overrideProps = { ...childProps };\n  for (const propName in childProps) {\n    const slotPropValue = slotProps[propName];\n    const childPropValue = childProps[propName];\n    const isHandler = /^on[A-Z]/.test(propName);\n    if (isHandler) {\n      if (slotPropValue && childPropValue) {\n        overrideProps[propName] = (...args) => {\n          childPropValue(...args);\n          slotPropValue(...args);\n        };\n      } else if (slotPropValue) {\n        overrideProps[propName] = slotPropValue;\n      }\n    } else if (propName === \"style\") {\n      overrideProps[propName] = { ...slotPropValue, ...childPropValue };\n    } else if (propName === \"className\") {\n      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(\" \");\n    }\n  }\n  return { ...slotProps, ...overrideProps };\n}\nfunction getElementRef(element) {\n  let getter = Object.getOwnPropertyDescriptor(element.props, \"ref\")?.get;\n  let mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n  if (mayWarn) {\n    return element.ref;\n  }\n  getter = Object.getOwnPropertyDescriptor(element, \"ref\")?.get;\n  mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n  if (mayWarn) {\n    return element.props.ref;\n  }\n  return element.props.ref || element.ref;\n}\nvar Root = Slot;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXNsb3QvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDNEI7QUFDVDtBQUNsRCxXQUFXLDZDQUFnQjtBQUMzQixVQUFVLHlCQUF5QjtBQUNuQyx3QkFBd0IsMkNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQWMsK0JBQStCLDJDQUFjO0FBQ3ZFLGVBQWUsaURBQW9CO0FBQ25DLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixzREFBRyxjQUFjLDJDQUEyQyxpREFBb0IsZUFBZSwrQ0FBa0IsMENBQTBDO0FBQ3RMO0FBQ0EseUJBQXlCLHNEQUFHLGNBQWMsMkNBQTJDO0FBQ3JGLENBQUM7QUFDRDtBQUNBLGdCQUFnQiw2Q0FBZ0I7QUFDaEMsVUFBVSx5QkFBeUI7QUFDbkMsTUFBTSxpREFBb0I7QUFDMUI7QUFDQSxXQUFXLCtDQUFrQjtBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLHlFQUFXO0FBQ3JDLEtBQUs7QUFDTDtBQUNBLFNBQVMsMkNBQWMsdUJBQXVCLDJDQUFjO0FBQzVELENBQUM7QUFDRDtBQUNBLG1CQUFtQixVQUFVO0FBQzdCLHlCQUF5QixzREFBRyxDQUFDLHVEQUFRLElBQUksVUFBVTtBQUNuRDtBQUNBO0FBQ0EsU0FBUyxpREFBb0I7QUFDN0I7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOLGtDQUFrQztBQUNsQyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3Qtc2xvdC9kaXN0L2luZGV4Lm1qcz8yNTIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L3Nsb3Qvc3JjL1Nsb3QudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbXBvc2VSZWZzIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnNcIjtcbmltcG9ydCB7IEZyYWdtZW50LCBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBTbG90ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5zbG90UHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gIGNvbnN0IHNsb3R0YWJsZSA9IGNoaWxkcmVuQXJyYXkuZmluZChpc1Nsb3R0YWJsZSk7XG4gIGlmIChzbG90dGFibGUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gc2xvdHRhYmxlLnByb3BzLmNoaWxkcmVuO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gY2hpbGRyZW5BcnJheS5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQgPT09IHNsb3R0YWJsZSkge1xuICAgICAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQobmV3RWxlbWVudCkgPiAxKSByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShudWxsKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmlzVmFsaWRFbGVtZW50KG5ld0VsZW1lbnQpID8gbmV3RWxlbWVudC5wcm9wcy5jaGlsZHJlbiA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goU2xvdENsb25lLCB7IC4uLnNsb3RQcm9wcywgcmVmOiBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuOiBSZWFjdC5pc1ZhbGlkRWxlbWVudChuZXdFbGVtZW50KSA/IFJlYWN0LmNsb25lRWxlbWVudChuZXdFbGVtZW50LCB2b2lkIDAsIG5ld0NoaWxkcmVuKSA6IG51bGwgfSk7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goU2xvdENsb25lLCB7IC4uLnNsb3RQcm9wcywgcmVmOiBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuIH0pO1xufSk7XG5TbG90LmRpc3BsYXlOYW1lID0gXCJTbG90XCI7XG52YXIgU2xvdENsb25lID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5zbG90UHJvcHMgfSA9IHByb3BzO1xuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgY29uc3QgY2hpbGRyZW5SZWYgPSBnZXRFbGVtZW50UmVmKGNoaWxkcmVuKTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAuLi5tZXJnZVByb3BzKHNsb3RQcm9wcywgY2hpbGRyZW4ucHJvcHMpLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgPyBjb21wb3NlUmVmcyhmb3J3YXJkZWRSZWYsIGNoaWxkcmVuUmVmKSA6IGNoaWxkcmVuUmVmXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDEgPyBSZWFjdC5DaGlsZHJlbi5vbmx5KG51bGwpIDogbnVsbDtcbn0pO1xuU2xvdENsb25lLmRpc3BsYXlOYW1lID0gXCJTbG90Q2xvbmVcIjtcbnZhciBTbG90dGFibGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KEZyYWdtZW50LCB7IGNoaWxkcmVuIH0pO1xufTtcbmZ1bmN0aW9uIGlzU2xvdHRhYmxlKGNoaWxkKSB7XG4gIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQudHlwZSA9PT0gU2xvdHRhYmxlO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wcyhzbG90UHJvcHMsIGNoaWxkUHJvcHMpIHtcbiAgY29uc3Qgb3ZlcnJpZGVQcm9wcyA9IHsgLi4uY2hpbGRQcm9wcyB9O1xuICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoaWxkUHJvcHMpIHtcbiAgICBjb25zdCBzbG90UHJvcFZhbHVlID0gc2xvdFByb3BzW3Byb3BOYW1lXTtcbiAgICBjb25zdCBjaGlsZFByb3BWYWx1ZSA9IGNoaWxkUHJvcHNbcHJvcE5hbWVdO1xuICAgIGNvbnN0IGlzSGFuZGxlciA9IC9eb25bQS1aXS8udGVzdChwcm9wTmFtZSk7XG4gICAgaWYgKGlzSGFuZGxlcikge1xuICAgICAgaWYgKHNsb3RQcm9wVmFsdWUgJiYgY2hpbGRQcm9wVmFsdWUpIHtcbiAgICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIGNoaWxkUHJvcFZhbHVlKC4uLmFyZ3MpO1xuICAgICAgICAgIHNsb3RQcm9wVmFsdWUoLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNsb3RQcm9wVmFsdWUpIHtcbiAgICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSBzbG90UHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSB7IC4uLnNsb3RQcm9wVmFsdWUsIC4uLmNoaWxkUHJvcFZhbHVlIH07XG4gICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJjbGFzc05hbWVcIikge1xuICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSBbc2xvdFByb3BWYWx1ZSwgY2hpbGRQcm9wVmFsdWVdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgLi4uc2xvdFByb3BzLCAuLi5vdmVycmlkZVByb3BzIH07XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50UmVmKGVsZW1lbnQpIHtcbiAgbGV0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudC5wcm9wcywgXCJyZWZcIik/LmdldDtcbiAgbGV0IG1heVdhcm4gPSBnZXR0ZXIgJiYgXCJpc1JlYWN0V2FybmluZ1wiIGluIGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmc7XG4gIGlmIChtYXlXYXJuKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucmVmO1xuICB9XG4gIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudCwgXCJyZWZcIik/LmdldDtcbiAgbWF5V2FybiA9IGdldHRlciAmJiBcImlzUmVhY3RXYXJuaW5nXCIgaW4gZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZztcbiAgaWYgKG1heVdhcm4pIHtcbiAgICByZXR1cm4gZWxlbWVudC5wcm9wcy5yZWY7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucHJvcHMucmVmIHx8IGVsZW1lbnQucmVmO1xufVxudmFyIFJvb3QgPSBTbG90O1xuZXhwb3J0IHtcbiAgUm9vdCxcbiAgU2xvdCxcbiAgU2xvdHRhYmxlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@radix-ui/react-slot/dist/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRefs: () => (/* binding */ composeRefs),\n/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n// packages/react/compose-refs/src/composeRefs.tsx\n\nfunction setRef(ref, value) {\n  if (typeof ref === \"function\") {\n    ref(value);\n  } else if (ref !== null && ref !== void 0) {\n    ref.current = value;\n  }\n}\nfunction composeRefs(...refs) {\n  return (node) => refs.forEach((ref) => setRef(ref, node));\n}\nfunction useComposedRefs(...refs) {\n  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUMrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhDQUFpQjtBQUMxQjtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzL2Rpc3QvaW5kZXgubWpzPzlmYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvY29tcG9zZS1yZWZzL3NyYy9jb21wb3NlUmVmcy50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gc2V0UmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocmVmICE9PSBudWxsICYmIHJlZiAhPT0gdm9pZCAwKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gY29tcG9zZVJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gKG5vZGUpID0+IHJlZnMuZm9yRWFjaCgocmVmKSA9PiBzZXRSZWYocmVmLCBub2RlKSk7XG59XG5mdW5jdGlvbiB1c2VDb21wb3NlZFJlZnMoLi4ucmVmcykge1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soY29tcG9zZVJlZnMoLi4ucmVmcyksIHJlZnMpO1xufVxuZXhwb3J0IHtcbiAgY29tcG9zZVJlZnMsXG4gIHVzZUNvbXBvc2VkUmVmc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@radix-ui/react-slot/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@radix-ui/react-slot/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   Slot: () => (/* binding */ Slot),\n/* harmony export */   Slottable: () => (/* binding */ Slottable)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(rsc)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js\");\n// packages/react/slot/src/Slot.tsx\n\n\n\nvar Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n  const { children, ...slotProps } = props;\n  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);\n  const slottable = childrenArray.find(isSlottable);\n  if (slottable) {\n    const newElement = slottable.props.children;\n    const newChildren = childrenArray.map((child) => {\n      if (child === slottable) {\n        if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);\n        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;\n      } else {\n        return child;\n      }\n    });\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });\n  }\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });\n});\nSlot.displayName = \"Slot\";\nvar SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n  const { children, ...slotProps } = props;\n  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {\n    const childrenRef = getElementRef(children);\n    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {\n      ...mergeProps(slotProps, children.props),\n      // @ts-ignore\n      ref: forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.composeRefs)(forwardedRef, childrenRef) : childrenRef\n    });\n  }\n  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;\n});\nSlotClone.displayName = \"SlotClone\";\nvar Slottable = ({ children }) => {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children });\n};\nfunction isSlottable(child) {\n  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === Slottable;\n}\nfunction mergeProps(slotProps, childProps) {\n  const overrideProps = { ...childProps };\n  for (const propName in childProps) {\n    const slotPropValue = slotProps[propName];\n    const childPropValue = childProps[propName];\n    const isHandler = /^on[A-Z]/.test(propName);\n    if (isHandler) {\n      if (slotPropValue && childPropValue) {\n        overrideProps[propName] = (...args) => {\n          childPropValue(...args);\n          slotPropValue(...args);\n        };\n      } else if (slotPropValue) {\n        overrideProps[propName] = slotPropValue;\n      }\n    } else if (propName === \"style\") {\n      overrideProps[propName] = { ...slotPropValue, ...childPropValue };\n    } else if (propName === \"className\") {\n      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(\" \");\n    }\n  }\n  return { ...slotProps, ...overrideProps };\n}\nfunction getElementRef(element) {\n  let getter = Object.getOwnPropertyDescriptor(element.props, \"ref\")?.get;\n  let mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n  if (mayWarn) {\n    return element.ref;\n  }\n  getter = Object.getOwnPropertyDescriptor(element, \"ref\")?.get;\n  mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n  if (mayWarn) {\n    return element.props.ref;\n  }\n  return element.props.ref || element.ref;\n}\nvar Root = Slot;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXNsb3QvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDK0I7QUFDNEI7QUFDVDtBQUNsRCxXQUFXLDZDQUFnQjtBQUMzQixVQUFVLHlCQUF5QjtBQUNuQyx3QkFBd0IsMkNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQWMsK0JBQStCLDJDQUFjO0FBQ3ZFLGVBQWUsaURBQW9CO0FBQ25DLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixzREFBRyxjQUFjLDJDQUEyQyxpREFBb0IsZUFBZSwrQ0FBa0IsMENBQTBDO0FBQ3RMO0FBQ0EseUJBQXlCLHNEQUFHLGNBQWMsMkNBQTJDO0FBQ3JGLENBQUM7QUFDRDtBQUNBLGdCQUFnQiw2Q0FBZ0I7QUFDaEMsVUFBVSx5QkFBeUI7QUFDbkMsTUFBTSxpREFBb0I7QUFDMUI7QUFDQSxXQUFXLCtDQUFrQjtBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLHlFQUFXO0FBQ3JDLEtBQUs7QUFDTDtBQUNBLFNBQVMsMkNBQWMsdUJBQXVCLDJDQUFjO0FBQzVELENBQUM7QUFDRDtBQUNBLG1CQUFtQixVQUFVO0FBQzdCLHlCQUF5QixzREFBRyxDQUFDLHVEQUFRLElBQUksVUFBVTtBQUNuRDtBQUNBO0FBQ0EsU0FBUyxpREFBb0I7QUFDN0I7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOLGtDQUFrQztBQUNsQyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3Qtc2xvdC9kaXN0L2luZGV4Lm1qcz8xMzI1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L3Nsb3Qvc3JjL1Nsb3QudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbXBvc2VSZWZzIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnNcIjtcbmltcG9ydCB7IEZyYWdtZW50LCBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBTbG90ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5zbG90UHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gIGNvbnN0IHNsb3R0YWJsZSA9IGNoaWxkcmVuQXJyYXkuZmluZChpc1Nsb3R0YWJsZSk7XG4gIGlmIChzbG90dGFibGUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gc2xvdHRhYmxlLnByb3BzLmNoaWxkcmVuO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gY2hpbGRyZW5BcnJheS5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQgPT09IHNsb3R0YWJsZSkge1xuICAgICAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQobmV3RWxlbWVudCkgPiAxKSByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShudWxsKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmlzVmFsaWRFbGVtZW50KG5ld0VsZW1lbnQpID8gbmV3RWxlbWVudC5wcm9wcy5jaGlsZHJlbiA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goU2xvdENsb25lLCB7IC4uLnNsb3RQcm9wcywgcmVmOiBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuOiBSZWFjdC5pc1ZhbGlkRWxlbWVudChuZXdFbGVtZW50KSA/IFJlYWN0LmNsb25lRWxlbWVudChuZXdFbGVtZW50LCB2b2lkIDAsIG5ld0NoaWxkcmVuKSA6IG51bGwgfSk7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goU2xvdENsb25lLCB7IC4uLnNsb3RQcm9wcywgcmVmOiBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuIH0pO1xufSk7XG5TbG90LmRpc3BsYXlOYW1lID0gXCJTbG90XCI7XG52YXIgU2xvdENsb25lID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5zbG90UHJvcHMgfSA9IHByb3BzO1xuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgY29uc3QgY2hpbGRyZW5SZWYgPSBnZXRFbGVtZW50UmVmKGNoaWxkcmVuKTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAuLi5tZXJnZVByb3BzKHNsb3RQcm9wcywgY2hpbGRyZW4ucHJvcHMpLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgPyBjb21wb3NlUmVmcyhmb3J3YXJkZWRSZWYsIGNoaWxkcmVuUmVmKSA6IGNoaWxkcmVuUmVmXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDEgPyBSZWFjdC5DaGlsZHJlbi5vbmx5KG51bGwpIDogbnVsbDtcbn0pO1xuU2xvdENsb25lLmRpc3BsYXlOYW1lID0gXCJTbG90Q2xvbmVcIjtcbnZhciBTbG90dGFibGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KEZyYWdtZW50LCB7IGNoaWxkcmVuIH0pO1xufTtcbmZ1bmN0aW9uIGlzU2xvdHRhYmxlKGNoaWxkKSB7XG4gIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQudHlwZSA9PT0gU2xvdHRhYmxlO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wcyhzbG90UHJvcHMsIGNoaWxkUHJvcHMpIHtcbiAgY29uc3Qgb3ZlcnJpZGVQcm9wcyA9IHsgLi4uY2hpbGRQcm9wcyB9O1xuICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoaWxkUHJvcHMpIHtcbiAgICBjb25zdCBzbG90UHJvcFZhbHVlID0gc2xvdFByb3BzW3Byb3BOYW1lXTtcbiAgICBjb25zdCBjaGlsZFByb3BWYWx1ZSA9IGNoaWxkUHJvcHNbcHJvcE5hbWVdO1xuICAgIGNvbnN0IGlzSGFuZGxlciA9IC9eb25bQS1aXS8udGVzdChwcm9wTmFtZSk7XG4gICAgaWYgKGlzSGFuZGxlcikge1xuICAgICAgaWYgKHNsb3RQcm9wVmFsdWUgJiYgY2hpbGRQcm9wVmFsdWUpIHtcbiAgICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIGNoaWxkUHJvcFZhbHVlKC4uLmFyZ3MpO1xuICAgICAgICAgIHNsb3RQcm9wVmFsdWUoLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNsb3RQcm9wVmFsdWUpIHtcbiAgICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSBzbG90UHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSB7IC4uLnNsb3RQcm9wVmFsdWUsIC4uLmNoaWxkUHJvcFZhbHVlIH07XG4gICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJjbGFzc05hbWVcIikge1xuICAgICAgb3ZlcnJpZGVQcm9wc1twcm9wTmFtZV0gPSBbc2xvdFByb3BWYWx1ZSwgY2hpbGRQcm9wVmFsdWVdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgLi4uc2xvdFByb3BzLCAuLi5vdmVycmlkZVByb3BzIH07XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50UmVmKGVsZW1lbnQpIHtcbiAgbGV0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudC5wcm9wcywgXCJyZWZcIik/LmdldDtcbiAgbGV0IG1heVdhcm4gPSBnZXR0ZXIgJiYgXCJpc1JlYWN0V2FybmluZ1wiIGluIGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmc7XG4gIGlmIChtYXlXYXJuKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucmVmO1xuICB9XG4gIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudCwgXCJyZWZcIik/LmdldDtcbiAgbWF5V2FybiA9IGdldHRlciAmJiBcImlzUmVhY3RXYXJuaW5nXCIgaW4gZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZztcbiAgaWYgKG1heVdhcm4pIHtcbiAgICByZXR1cm4gZWxlbWVudC5wcm9wcy5yZWY7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucHJvcHMucmVmIHx8IGVsZW1lbnQucmVmO1xufVxudmFyIFJvb3QgPSBTbG90O1xuZXhwb3J0IHtcbiAgUm9vdCxcbiAgU2xvdCxcbiAgU2xvdHRhYmxlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@radix-ui/react-slot/dist/index.mjs\n");

/***/ })

};
;