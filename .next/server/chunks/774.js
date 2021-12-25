"use strict";
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 5803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LJ": () => (/* binding */ setSpotifyAuth),
/* harmony export */   "M8": () => (/* binding */ setAccessToken),
/* harmony export */   "ir": () => (/* binding */ getSpotifyAuth)
/* harmony export */ });
// Stateful Cache
let authCache = {
};
if (false) {}
const setSpotifyAuth = (authKey, { accessToken , refreshToken  })=>{
    if (!accessToken || !refreshToken) {
        throw new Error('Invalid credentials for authentication cache');
    }
    authCache[authKey] = {
        accessToken,
        refreshToken
    };
};
const setAccessToken = (authKey, accessToken)=>{
    if (!authCache[authKey]) return;
    authCache[authKey].accessToken = accessToken;
};
const getSpotifyAuth = (key)=>authCache[key]
;


/***/ }),

/***/ 9972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T5": () => (/* binding */ API_URL),
/* harmony export */   "js": () => (/* binding */ ACCOUNT_URL),
/* harmony export */   "BO": () => (/* binding */ AUTHORIZE_SCOPE)
/* harmony export */ });
const API_URL = 'https://api.spotify.com/v1';
const ACCOUNT_URL = 'https://accounts.spotify.com';
const AUTHORIZE_SCOPE = 'user-modify-playback-state user-read-playback-state user-read-currently-playing user-read-recently-played';


/***/ }),

/***/ 4774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "js": () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_2__.js),
/* harmony export */   "BO": () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_2__.BO),
/* harmony export */   "LJ": () => (/* reexport safe */ _cache__WEBPACK_IMPORTED_MODULE_3__.LJ),
/* harmony export */   "pP": () => (/* binding */ retrieveSpotifyTokens),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports user, currentTrack, search, addToQueue */
/* harmony import */ var form_urlencoded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6364);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6212);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4379);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9972);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_1__, form_urlencoded__WEBPACK_IMPORTED_MODULE_0__]);
([_request__WEBPACK_IMPORTED_MODULE_1__, form_urlencoded__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const { REDIRECT_URI , CLIENT_ID , CLIENT_SECRET  } = process.env;
const toBase64 = (str)=>Buffer.from(str).toString('base64')
;
/*
 * CAUTION: This exported module is stateful...
 * To use it, you'll have to put the auth data in the in-memory cache first.
 * `authKey` defines the cached key to use as access token and refresh token store.
 *
 * At least that stateful mindfuck brings in one big benefit: Automatic refresh of accessToken if it expires.
 */ const retrieveSpotifyTokens = async (authorizationCode)=>{
    const { access_token: accessToken , refresh_token: refreshToken  } = await (0,_request__WEBPACK_IMPORTED_MODULE_1__/* .accountRequest */ .nA)('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${toBase64(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
        },
        body: (0,form_urlencoded__WEBPACK_IMPORTED_MODULE_0__["default"])({
            code: authorizationCode,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code'
        })
    });
    return {
        accessToken,
        refreshToken
    };
};
const user = (authKey)=>async ()=>(0,_transform__WEBPACK_IMPORTED_MODULE_4__/* .fromUserResponse */ .V)(await (0,_request__WEBPACK_IMPORTED_MODULE_1__/* .authenticatedApiRequest */ .dt)(authKey, '/me'))
;
const currentTrack = (authKey)=>async ()=>(0,_transform__WEBPACK_IMPORTED_MODULE_4__/* .fromTrackItem */ .o)((await (0,_request__WEBPACK_IMPORTED_MODULE_1__/* .authenticatedApiRequest */ .dt)(authKey, '/me/player/currently-playing')).item)
;
const search = (authKey)=>async (query)=>(await (0,_request__WEBPACK_IMPORTED_MODULE_1__/* .authenticatedApiRequest */ .dt)(authKey, `/search?type=track&q=${query}`)).tracks.items.map(_transform__WEBPACK_IMPORTED_MODULE_4__/* .fromTrackItem */ .o)
;
const addToQueue = (authKey)=>(trackId)=>(0,_request__WEBPACK_IMPORTED_MODULE_1__/* .authenticatedApiRequest */ .dt)(authKey, `/me/player/queue?uri=spotify:track:${trackId}`, {
            method: 'POST'
        })
;
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((authKey)=>({
        user: user(authKey),
        currentTrack: currentTrack(authKey),
        search: search(authKey),
        addToQueue: addToQueue(authKey)
    }));

});

/***/ }),

/***/ 4379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nA": () => (/* binding */ accountRequest),
/* harmony export */   "dt": () => (/* binding */ authenticatedApiRequest)
/* harmony export */ });
/* unused harmony export apiRequest */
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9710);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6544);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5803);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9972);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_1__]);
node_fetch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const refresh = async (authKey)=>{
    const auth = (0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .getSpotifyAuth */ .ir)(authKey) || authKey;
    const { access_token: accessToken  } = await accountRequest('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formEncode({
            refresh_token: auth.refreshToken,
            grant_type: 'refresh_token'
        })
    });
    if (lodash_fp__WEBPACK_IMPORTED_MODULE_0___default().isString(authKey)) {
        // If authKey wasn't a string, don't update the cache
        (0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .setAccessToken */ .M8)(authKey, accessToken);
    }
    return accessToken;
};
const apiRequest = async (uri, { method ='GET' , headers , body , ...options } = {
})=>{
    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_const__WEBPACK_IMPORTED_MODULE_3__/* .API_URL */ .T5}${encodeURI(uri)}`, {
        method,
        headers,
        body,
        ...options
    });
    if (res.status === 204) {
        return;
    }
    try {
        return res.json();
    } catch  {
        return res;
    }
};
const accountRequest = async (uri, { method ='GET' , headers , body , ...options } = {
})=>(await (0,node_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_const__WEBPACK_IMPORTED_MODULE_3__/* .ACCOUNT_URL */ .js}${encodeURI(uri)}`, {
        method,
        headers,
        body,
        ...options
    })).json()
;
const authenticatedApiRequest = async (authKey, uri, { method ='GET' , headers , body , ...options } = {
})=>{
    // authKey found in Cache OR authKey IS auth object
    const auth = (0,_cache__WEBPACK_IMPORTED_MODULE_2__/* .getSpotifyAuth */ .ir)(authKey) || authKey;
    if (!auth.accessToken || !auth.refreshToken) {
        console.log('No authentication could be found');
        return null; // Reject promise later on
    }
    const request = (token)=>apiRequest(uri, {
            method,
            headers: {
                Authorization: `Bearer ${token}`,
                ...headers
            },
            body,
            ...options
        })
    ;
    try {
        return request(auth.accessToken);
    } catch (err) {
        return request(await refresh(authKey));
    }
};

});

/***/ }),

/***/ 6212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ fromUserResponse),
/* harmony export */   "o": () => (/* binding */ fromTrackItem)
/* harmony export */ });
const fromUserResponse = ({ display_name: displayName , id , images: [{ url: image  }] ,  })=>({
        id,
        displayName,
        image
    })
;
const fromTrackItem = ({ album: { images: [, image] , ...album } , artists: [artist, ...features] , id , uri , name: name1 ,  })=>({
        id,
        uri,
        name: name1,
        album: {
            image: image.url,
            name: album.name
        },
        artist: artist.name,
        ...features.length > 0 && {
            features: features.map(({ name  })=>name
            )
        }
    })
;


/***/ })

};
;