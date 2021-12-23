"use strict";
exports.id = 407;
exports.ids = [407];
exports.modules = {

/***/ 9407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VP": () => (/* binding */ AUTH_COOKIE),
/* harmony export */   "IB": () => (/* binding */ protectedRoute)
/* harmony export */ });
/* unused harmony export verifyAuthentication */
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9710);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_httpSession__WEBPACK_IMPORTED_MODULE_2__]);
_httpSession__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const { JWT_SECRET  } = process.env;
const fromBearer = (bearerHeader)=>bearerHeader && bearerHeader.startsWith('Bearer') && lodash_fp__WEBPACK_IMPORTED_MODULE_0___default().last(bearerHeader.split(' '))
;
const AUTH_COOKIE = 'social-queue-auth';
/**
 * Returns JWT payload.
 * If user is not authenticated returns null
 *
 * @param {*} req
 * @returns
 */ const verifyAuthentication = (req)=>{
    const authToken = req.cookies[AUTH_COOKIE] || fromBearer(req.headers.authorization);
    if (!authToken) {
        return null;
    }
    // Validate Auth
    try {
        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(authToken, JWT_SECRET);
    } catch (err) {
        return null;
    }
};
const protectedRoute = (handler, { redirect =false  } = {
})=>async (req, res)=>{
        req.auth = verifyAuthentication(req);
        if (req.auth === null) {
            // if redirect is true, redirect to auth url. Keep original url in session
            if (redirect) {
                const session = await (0,_httpSession__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
                session.originalUrl = req.url;
                return res.redirect('/api/auth/login');
            }
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        return handler(req, res);
    }
;

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