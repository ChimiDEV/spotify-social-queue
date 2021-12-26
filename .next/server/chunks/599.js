"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 2599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LJ": () => (/* binding */ setSpotifyAuth),
/* harmony export */   "M8": () => (/* binding */ setAccessToken),
/* harmony export */   "ir": () => (/* binding */ getSpotifyAuth)
/* harmony export */ });
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7773);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);

const redis = (0,redis__WEBPACK_IMPORTED_MODULE_0__.createClient)();
const connectRedis = async ()=>{
    try {
        await redis.ping();
        return;
    } catch  {
        await redis.connect();
    }
};
const setSpotifyAuth = async (authKey, { accessToken , refreshToken  })=>{
    await connectRedis();
    if (!accessToken || !refreshToken) {
        throw new Error('Invalid credentials for authentication cache');
    }
    await redis.set(`${authKey}-access`, accessToken);
    await redis.set(`${authKey}-refresh`, refreshToken);
};
const setAccessToken = async (authKey, accessToken)=>{
    await connectRedis();
    await redis.set(`${authKey}-access`, accessToken);
};
const getSpotifyAuth = async (key)=>{
    await connectRedis();
    const accessToken = await redis.get(`${key}-access`);
    const refreshToken = await redis.get(`${key}-refresh`);
    return accessToken && refreshToken ? {
        accessToken,
        refreshToken
    } : null;
};


/***/ })

};
;