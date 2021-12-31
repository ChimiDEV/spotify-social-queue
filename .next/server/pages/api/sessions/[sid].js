"use strict";
(() => {
var exports = {};
exports.id = 464;
exports.ids = [464];
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

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 9560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2599);
/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_spotify__WEBPACK_IMPORTED_MODULE_1__]);
_utils_spotify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    switch(req.method){
        case 'GET':
            const auth = await (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__/* .getSpotifyAuth */ .ir)(req.query.sid);
            if (!auth) {
                return res.status(404).json({
                    message: 'Not Found'
                });
            }
            return res.json({
                message: 'Ok'
            });
        case 'POST':
            await (0,_utils_spotify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(req.query.sid).addToQueue(req.query.track_id);
            return res.status(204).send();
    }
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [599,774], () => (__webpack_exec__(9560)));
module.exports = __webpack_exports__;

})();