"use strict";
exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 3830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClipboardModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(796);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
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
const ModalInput = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'Black'
    }
});
function ClipboardModal({ open , onClose , onChange , onSubmit  }) {
    const withEnter = (handler)=>(e)=>{
            if (e.code !== 'Enter') return;
            handler();
        }
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        open: open,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CenteredBox, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                theme: modalTheme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalInput, {
                        label: "Spotify URL",
                        variant: "outlined",
                        size: "small",
                        placeholder: "Bitte f\xfcge den Spotify URL hier ein",
                        fullWidth: true,
                        onChange: onChange,
                        onKeyDown: withEnter(onSubmit)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            marginTop: '15px'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                onClick: onClose,
                                children: "Abbrechen"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "contained",
                                onClick: onSubmit,
                                children: "Ok"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 5789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5604);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_2__]);
_stitches_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const Content = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('div', {
    marginTop: '1vh',
    marginBottom: '60px',
    marginLeft: '2vw',
    marginRight: '2vw',
    maxWidth: '96vw',
    overflowX: 'hidden'
});
function Layout({ children  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            })
        ]
    }));
};

});

/***/ }),

/***/ 6649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wish)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5789);
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(796);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ClipboardModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3830);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ClipboardModal__WEBPACK_IMPORTED_MODULE_6__, _components_Layout__WEBPACK_IMPORTED_MODULE_1__, _stitches_react__WEBPACK_IMPORTED_MODULE_2__]);
([_components_ClipboardModal__WEBPACK_IMPORTED_MODULE_6__, _components_Layout__WEBPACK_IMPORTED_MODULE_1__, _stitches_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const extractSpotifyId = (url)=>url.split('/').pop().split('?')[0]
;
const putInQueue = async (sid, shareUrl)=>{
    if (!shareUrl.startsWith('https://open.spotify.com/track')) {
        // invalid spotify url
        return;
    }
    await fetch(`/api/sessions/${sid}?track_id=${extractSpotifyId(shareUrl)}`, {
        method: 'POST'
    });
};
const searchForSongs = async (sid, searchValue)=>{
    const res = await fetch(`/api/sessions/${sid}/tracks?q=${searchValue}`);
    return res.json();
};
function Wish() {
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: spotifyUrl , 1: setSpotifyUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: clipboardModal , 1: setClipboardModal  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: searchResults , 1: setSearchResults  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const closeModal = ()=>{
        setSpotifyUrl('');
        setClipboardModal(false);
    };
    const searchOnEnter = async (e)=>{
        if (e.code !== 'Enter') return;
        setSearchResults(await searchForSongs(router.query.sid, searchValue));
    };
    const onClipboardButton = async ()=>{
        if (!navigator.clipboard) {
            // Unable to retrieve from Clipboard, ask for user input
            setClipboardModal(true);
            return;
        }
        const shareUrl = await navigator.clipboard.readText();
        await putInQueue(router.query.sid, shareUrl);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClipboardModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClose: closeModal,
                onChange: (e)=>setSpotifyUrl(e.target.value)
                ,
                onSubmit: async ()=>{
                    await putInQueue(router.query.sid, spotifyUrl);
                    closeModal();
                },
                open: clipboardModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    paddingTop: '15px'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                    label: "Suche",
                    variant: "outlined",
                    size: "small",
                    placeholder: "Suche nach deinem Wunschsong",
                    fullWidth: true,
                    onChange: (e)=>setSearchValue(e.target.value)
                    ,
                    onKeyDown: searchOnEnter
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    marginTop: '15px'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        onClick: onClipboardButton,
                        children: "Aus Zwischenablage"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "contained",
                        onClick: async ()=>setSearchResults(await searchForSongs(router.query.sid, searchValue))
                        ,
                        children: "Suchen"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    color: 'white'
                },
                children: searchResults.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            x.name,
                            " | ",
                            x.artist
                        ]
                    }, i)
                )
            })
        ]
    }));
};

});

/***/ })

};
;