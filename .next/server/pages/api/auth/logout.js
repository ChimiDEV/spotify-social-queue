"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 9710:
/***/ ((module) => {

module.exports = require("lodash/fp");

/***/ }),

/***/ 7775:
/***/ ((module) => {

module.exports = import("next-session");;

/***/ }),

/***/ 4766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9407);
/* harmony import */ var _utils_httpSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_1__, _utils_httpSession__WEBPACK_IMPORTED_MODULE_2__]);
([_utils_auth__WEBPACK_IMPORTED_MODULE_1__, _utils_httpSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



async function handler(req, res) {
    const session = await (0,_utils_httpSession__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    await session.destroy();
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
    cookies.set(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_COOKIE */ .VP);
    return res.json({
        message: 'Ok'
    });
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [407], () => (__webpack_exec__(4766)));
module.exports = __webpack_exports__;

})();