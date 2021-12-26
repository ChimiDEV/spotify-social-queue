"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 9710:
/***/ ((module) => {

module.exports = require("lodash/fp");

/***/ }),

/***/ 7773:
/***/ ((module) => {

module.exports = require("redis");

/***/ }),

/***/ 6364:
/***/ ((module) => {

module.exports = import("form-urlencoded");;

/***/ }),

/***/ 7775:
/***/ ((module) => {

module.exports = import("next-session");;

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_httpSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6627);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9710);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_spotify__WEBPACK_IMPORTED_MODULE_3__, _utils_httpSession__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_spotify__WEBPACK_IMPORTED_MODULE_3__, _utils_httpSession__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const queryString = lodash_fp__WEBPACK_IMPORTED_MODULE_2___default().pipe((lodash_fp__WEBPACK_IMPORTED_MODULE_2___default().entries), lodash_fp__WEBPACK_IMPORTED_MODULE_2___default().map(lodash_fp__WEBPACK_IMPORTED_MODULE_2___default().join('=')), lodash_fp__WEBPACK_IMPORTED_MODULE_2___default().join('&'));
const { CLIENT_ID , REDIRECT_URI  } = process.env;
async function handler(req, res) {
    const state = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(64).toString('hex');
    const session = await (0,_utils_httpSession__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    session.spotifyState = state;
    return res.redirect(`${_utils_spotify__WEBPACK_IMPORTED_MODULE_3__/* .ACCOUNT_URL */ .js}/authorize?${queryString({
        response_type: 'code',
        state,
        client_id: CLIENT_ID,
        scope: _utils_spotify__WEBPACK_IMPORTED_MODULE_3__/* .AUTHORIZE_SCOPE */ .BO,
        redirect_uri: REDIRECT_URI
    })}`);
};

});

/***/ }),

/***/ 6627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getSession */
/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_0__]);
next_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSession);

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [599,774], () => (__webpack_exec__(2495)));
module.exports = __webpack_exports__;

})();