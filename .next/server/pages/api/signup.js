"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XHJcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxyXG4vL1xyXG4vLyBMZWFybiBtb3JlOlxyXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/signup/index.ts":
/*!***********************************!*\
  !*** ./pages/api/signup/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?^*!@#$%]).{3,24}$/;\n    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;\n    const USERNAME_REGEX = /^[a-zA-Z0-9]{3,24}$/;\n    const { username , email , password , name  } = req.body;\n    if (!email || !password) {\n        return res.status(400).json({\n            message: \"Email and password are required.\"\n        });\n    }\n    if (!username) {\n        return res.status(400).json({\n            message: \"Username is required.\"\n        });\n    }\n    const legalPassword = PASSWORD_REGEX.test(password);\n    const legalEmail = EMAIL_REGEX.test(email);\n    const legalUsername = USERNAME_REGEX.test(username);\n    if (!legalPassword || !legalEmail || !legalUsername) {\n        return res.status(403).json({\n            message: \"Illegal field\"\n        });\n    }\n    const existingUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (existingUser) {\n        return res.status(400).json({\n            message: \"Email is already in use.\"\n        });\n    }\n    const hashedPassword = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, 10);\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n        data: {\n            username,\n            email,\n            password: hashedPassword,\n            name\n        }\n    });\n    res.status(201).json(user);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMkI7QUFDYTtBQUV6QixlQUFlRSxRQUFRQyxHQUFtQixFQUFFQyxHQUFtQixFQUFFO0lBQzlFLE1BQU1DLGlCQUF5QjtJQUMvQixNQUFNQyxjQUFzQjtJQUM1QixNQUFNQyxpQkFBeUI7SUFHL0IsTUFBTSxFQUFFQyxTQUFBQSxFQUFVQyxNQUFBQSxFQUFPQyxTQUFBQSxFQUFVQyxLQUFBQSxFQUFNLEdBQUdSLElBQUlTLElBQUk7SUFFcEQsSUFBSSxDQUFDSCxTQUFTLENBQUNDLFVBQVU7UUFDdkIsT0FBT04sSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQW1DO0lBQzVFO0lBRUEsSUFBSSxDQUFDUCxVQUFVO1FBQ2IsT0FBT0osSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXdCO0lBQ2pFO0lBRUEsTUFBTUMsZ0JBQWdCWCxlQUFlWSxJQUFJLENBQUNQO0lBQzFDLE1BQU1RLGFBQWFaLFlBQVlXLElBQUksQ0FBQ1I7SUFDcEMsTUFBTVUsZ0JBQWdCWixlQUFlVSxJQUFJLENBQUNUO0lBRTFDLElBQUksQ0FBQ1EsaUJBQWlCLENBQUNFLGNBQWMsQ0FBQ0MsZUFBZTtRQUNuRCxPQUFPZixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZ0I7SUFDekQ7SUFFQSxNQUFNSyxlQUFlLE1BQU1uQixtRUFBc0IsQ0FBQztRQUFFc0IsT0FBTztZQUFFZDtRQUFNO0lBQUU7SUFFckUsSUFBSVcsY0FBYztRQUNoQixPQUFPaEIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTJCO0lBQ3BFO0lBRUEsTUFBTVMsaUJBQWlCeEIsc0RBQWUsQ0FBQ1UsVUFBVTtJQUNqRCxNQUFNVyxPQUFPLE1BQU1wQiwrREFBa0IsQ0FBQztRQUFFMEIsTUFBTTtZQUFFbkI7WUFBVUM7WUFBT0MsVUFBVWM7WUFBZ0JiO1FBQUs7SUFBRTtJQUVsR1AsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ087QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3NpZ251cC9pbmRleC50cz9iNjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6TmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3QgUEFTU1dPUkRfUkVHRVg6IFJlZ0V4cCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbP14qIUAjJCVdKS57MywyNH0kLztcclxuICBjb25zdCBFTUFJTF9SRUdFWDogUmVnRXhwID0gL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS1dKyg/Oi5bYS16QS1aMC05LV0rKSokLztcclxuICBjb25zdCBVU0VSTkFNRV9SRUdFWDogUmVnRXhwID0gL15bYS16QS1aMC05XXszLDI0fSQvO1xyXG5cclxuICBcclxuICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIG5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gIFxyXG4gIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC4nIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkLicgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsZWdhbFBhc3N3b3JkID0gUEFTU1dPUkRfUkVHRVgudGVzdChwYXNzd29yZCk7XHJcbiAgY29uc3QgbGVnYWxFbWFpbCA9IEVNQUlMX1JFR0VYLnRlc3QoZW1haWwpO1xyXG4gIGNvbnN0IGxlZ2FsVXNlcm5hbWUgPSBVU0VSTkFNRV9SRUdFWC50ZXN0KHVzZXJuYW1lKTtcclxuXHJcbiAgaWYgKCFsZWdhbFBhc3N3b3JkIHx8ICFsZWdhbEVtYWlsIHx8ICFsZWdhbFVzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnSWxsZWdhbCBmaWVsZCcgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcclxuICBcclxuICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnRW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCAxMCk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7IGRhdGE6IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsIG5hbWUgfSB9KTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDEpLmpzb24odXNlcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImJjcnlwdCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJQQVNTV09SRF9SRUdFWCIsIkVNQUlMX1JFR0VYIiwiVVNFUk5BTUVfUkVHRVgiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibGVnYWxQYXNzd29yZCIsInRlc3QiLCJsZWdhbEVtYWlsIiwibGVnYWxVc2VybmFtZSIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImhhc2hTeW5jIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup/index.ts"));
module.exports = __webpack_exports__;

})();