"use strict";
(() => {
var exports = {};
exports.id = 110;
exports.ids = [110,695];
exports.modules = {

/***/ 3746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3867);
/* harmony import */ var _wish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wish__WEBPACK_IMPORTED_MODULE_2__]);
_wish__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// Use SSR to check if the session exists
async function getServerSideProps({ req  }) {
    try {
        const queueId = req.url.split('/').pop();
        const auth = await (0,_utils_cache__WEBPACK_IMPORTED_MODULE_1__/* .getSpotifyAuth */ .ir)(queueId);
        // Login again if no access token/refresh token exist in the auth cache
        if (!auth) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                queueId
            }
        };
    } catch  {
        return {
            notFound: true
        };
    }
}
function Index() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_wish__WEBPACK_IMPORTED_MODULE_2__["default"], {
    }));
};

});

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7773:
/***/ ((module) => {

module.exports = require("redis");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [867,649], () => (__webpack_exec__(3746)));
module.exports = __webpack_exports__;

})();