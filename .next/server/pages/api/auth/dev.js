"use strict";
(() => {
var exports = {};
exports.id = 559;
exports.ids = [559];
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

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 2605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_httpSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6627);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9407);
/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4774);
/* harmony import */ var _utils_queueSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9186);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_3__, _utils_spotify__WEBPACK_IMPORTED_MODULE_4__, _utils_queueSession__WEBPACK_IMPORTED_MODULE_5__, _utils_httpSession__WEBPACK_IMPORTED_MODULE_2__]);
([_utils_auth__WEBPACK_IMPORTED_MODULE_3__, _utils_spotify__WEBPACK_IMPORTED_MODULE_4__, _utils_queueSession__WEBPACK_IMPORTED_MODULE_5__, _utils_httpSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const { JWT_SECRET  } = process.env;
async function handler(req, res) {
    const session = await (0,_utils_httpSession__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
    session.spotifyState = null;
    const authTokens = {
        accessToken: 'BQC7P0WLNO-lcH9IQlwMsPF4zxVXMqo43MZXpKGvAdzpMaqp12MQRTAMI_mnpxrA224DhopHhpIFjdF3WPgkvicwZfQ2BnzrA7uuHvU_gm0aeaZA_DI1Jid4ACYW3d2SEIxC30YJzE4Bzn4QUEBuTxy3b5xaCQ',
        refreshToken: 'AQB1_OF6NZhp6X29nm05vTFx1bcFWVriwRwzhpi09Kd8FQLz5tsEpEFQ4zLrYF5vAMo7vIdl3dK205ob8QVstrLRK-5-W72mT6c9x5rTbzrWAtYfI9VMVJfbqMfSj2UDfuc'
    };
    const user = {
        id: '1128773164',
        displayName: 'Tim Walter',
        image: 'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-1/p320x320/45586100_2013327998728747_9221414553970016256_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=WdKzLDxcwl8AX8l_8JV&_nc_ht=scontent-lcy1-1.xx&edm=AP4hL3IEAAAA&oh=00_AT8xaeypyNGIWUPKYLl7DVC0KteIyfV_pLO5BgXlAtQtgA&oe=61E78C0B'
    };
    const queueId = (0,_utils_queueSession__WEBPACK_IMPORTED_MODULE_5__/* .queueIdFromUser */ .N)(user);
    (0,_utils_spotify__WEBPACK_IMPORTED_MODULE_4__/* .setSpotifyAuth */ .LJ)(queueId, authTokens);
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
        queueId,
        user
    }, JWT_SECRET);
    cookies.set(_utils_auth__WEBPACK_IMPORTED_MODULE_3__/* .AUTH_COOKIE */ .VP, token);
    res.redirect(session.originalUrl || '/');
};

});

/***/ }),

/***/ 9186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ queueIdFromUser)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const UUID_NAMESPACE = '6cf2a1e4-6b1d-45fc-aae7-3b5a675593f9';
const queueIdFromUser = ({ id , displayName  })=>(0,uuid__WEBPACK_IMPORTED_MODULE_0__.v5)(`${displayName}@${id}`, UUID_NAMESPACE)
;

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [774,407], () => (__webpack_exec__(2605)));
module.exports = __webpack_exports__;

})();