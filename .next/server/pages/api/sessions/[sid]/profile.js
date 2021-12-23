"use strict";
(() => {
var exports = {};
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 9710:
/***/ ((module) => {

module.exports = require("lodash/fp");

/***/ }),

/***/ 6364:
/***/ ((module) => {

module.exports = import("form-urlencoded");;

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 5554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_spotify__WEBPACK_IMPORTED_MODULE_0__]);
_utils_spotify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    res.status(200).json(await (0,_utils_spotify__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(req.query.sid).user());
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [774], () => (__webpack_exec__(5554)));
module.exports = __webpack_exports__;

})();