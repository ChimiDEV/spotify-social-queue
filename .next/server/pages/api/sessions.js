"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

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

/***/ 6556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_0__]);
_utils_auth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const handler = (req, res)=>{
    res.json({
        message: 'Ok',
        sid: req.auth.queueId,
        href: `/sessions/${req.auth.queueId}`
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_0__/* .protectedRoute */ .IB)(handler, {
    redirect: true
}));

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [407], () => (__webpack_exec__(6556)));
module.exports = __webpack_exports__;

})();