"use strict";
(() => {
var exports = {};
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 5604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MenuBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const byValue = (/* unused pure expression or super */ null && ([
    'wish',
    'queue',
    'poll'
]));
const byPath = {
    '/wish': 0,
    '/queue': 1,
    '/poll': 2
};
// To be updated
/**
 *
 * @param {{selectedLabel: 'wish'|'queue'|'poll', onChange: function}} props
 * @returns
 */ function MenuBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: selectedLabel , 1: setLabel  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(byPath[router.pathname] || 0);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
    }));
};


/***/ }),

/***/ 804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Queue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5604);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(796);
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_2__]);
_stitches_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const WhiteFont = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('div', {
    color: 'White'
});
// Use SSR to check if the session exists
async function getServerSideProps({ req  }) {
    try {
        const queueId = req.url.split('/').pop();
        const auth = await (0,_utils_cache__WEBPACK_IMPORTED_MODULE_3__/* .getSpotifyAuth */ .ir)(queueId);
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
function Queue() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WhiteFont, {
                children: "Queue"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MenuBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            })
        ]
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [867], () => (__webpack_exec__(804)));
module.exports = __webpack_exports__;

})();