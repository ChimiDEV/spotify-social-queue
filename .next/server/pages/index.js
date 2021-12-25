"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RedirectModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(796);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_1__]);
_stitches_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const modalTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({
    palette: {
        primary: {
            main: '#24a148'
        },
        info: {
            main: '#24a148'
        },
        text: {
            primary: '#000000',
            secondary: '#21272a',
            disabled: '#c1c7cd'
        },
        action: {
            hover: '#c1c7cd'
        }
    }
});
const CenteredBox = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '96vw',
    backgroundColor: '#f2f4f8',
    padding: '20px'
});
function RedirectModal({ open , href , onClose  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        open: open,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CenteredBox, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                theme: modalTheme,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        marginTop: '15px'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                "Okay, deine Session wurde erstellt!",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                }),
                                "Teile mit deinen Freunden diesen Link oder QR Code:"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                marginTop: '15px'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                href: href,
                                children: href
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                marginTop: '5px'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((qrcode_react__WEBPACK_IMPORTED_MODULE_5___default()), {
                                value: href
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                marginTop: '15px'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "contained",
                                onClick: onClose,
                                children: "Erledigt"
                            })
                        })
                    ]
                })
            })
        })
    }));
};

});

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(796);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_RedirectModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8689);
/* harmony import */ var _utils_spotify_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9054);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RedirectModal__WEBPACK_IMPORTED_MODULE_6__, _stitches_react__WEBPACK_IMPORTED_MODULE_2__]);
([_components_RedirectModal__WEBPACK_IMPORTED_MODULE_6__, _stitches_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const { JWT_SECRET  } = process.env;
const CenteredHeadline = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('h2', {
    display: 'block',
    textAlign: 'center',
    color: '#fff'
});
// Use SSR to check if the user is logged in. This react page is the only "protected" page
async function getServerSideProps({ req , res  }) {
    if (!req.cookies['social-queue-auth']) {
        return {
            redirect: {
                destination: '/api/auth/login'
            }
        };
    }
    try {
        const { queueId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(req.cookies['social-queue-auth'], JWT_SECRET);
        // Login again if no access token/refresh token exist in the auth cache
        if (!(0,_utils_spotify_cache__WEBPACK_IMPORTED_MODULE_7__/* .getSpotifyAuth */ .ir)(queueId)) {
            return {
                redirect: {
                    destination: '/api/auth/login'
                }
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
function Home({ queueId  }) {
    const { 0: sessionUrl , 1: setSessionUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: redirectModal , 1: setRedirectModal  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>setSessionUrl(`${location.protocol}//${location.host}/sessions/${queueId}`)
    , []);
    const onRedirectModalClose = ()=>{
        setRedirectModal(false);
    };
    const startSession = async ()=>{
        setRedirectModal(true);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            width: '100vw',
            marginTop: '50px'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RedirectModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                open: redirectModal,
                onClose: onRedirectModalClose,
                href: sessionUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CenteredHeadline, {
                children: "Spotify Social Queue"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "contained",
                onClick: startSession,
                sx: {
                    margin: '0 auto',
                    display: 'block'
                },
                children: "Starte eine Session"
            })
        ]
    }));
};

});

/***/ }),

/***/ 9054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ir": () => (/* binding */ getSpotifyAuth)
/* harmony export */ });
/* unused harmony exports setSpotifyAuth, setAccessToken */
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

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3678));
module.exports = __webpack_exports__;

})();