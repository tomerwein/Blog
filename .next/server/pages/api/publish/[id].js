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
exports.id = "pages/api/publish/[id]";
exports.ids = ["pages/api/publish/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XHJcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxyXG4vL1xyXG4vLyBMZWFybiBtb3JlOlxyXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/publish/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/publish/[id].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// PUT /api/publish/:id\nasync function handle(req, res) {\n    const postId = req.query.id;\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)({\n        req\n    });\n    const token = cookies.token;\n    if (!token) {\n        return res.status(401).send({\n            message: \"Unauthorized\"\n        });\n    }\n    let decodedToken;\n    try {\n        if (!process.env.JWT_SECRET) {\n            throw new Error(\"Missing JWT_SECRET\");\n        }\n        decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n    } catch (err) {\n        return res.status(401).send({\n            message: \"Unauthorized\"\n        });\n    }\n    const user = decodedToken;\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n        where: {\n            id: Number(postId)\n        },\n        data: {\n            published: true\n        }\n    });\n    res.json(post);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN3QztBQUNGO0FBQ1I7QUFFOUI7QUFDZSxlQUFlRyxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzlFLE1BQU1DLFNBQVNGLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtJQUMzQixNQUFNQyxVQUFVUixxREFBWUEsQ0FBQztRQUFDRztJQUFHO0lBQ2pDLE1BQU1NLFFBQVFELFFBQVFDLEtBQUs7SUFFM0IsSUFBSSxDQUFDQSxPQUFPO1FBQ1YsT0FBT0wsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDeEQ7SUFFQSxJQUFJQztJQUVKLElBQUk7UUFDRixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFO1lBQzNCLE1BQU0sSUFBSUMsTUFBTSxzQkFBcUI7UUFDdkM7UUFFQUosZUFBZVosMERBQVUsQ0FBQ1EsT0FBT0ssUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0lBQ3pELEVBQUUsT0FBT0csS0FBSztRQUNaLE9BQU9mLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFlO0lBQ3hEO0lBRUEsTUFBTVEsT0FBT1A7SUFFYixNQUFNUSxPQUFPLE1BQU10QiwrREFBa0IsQ0FBQztRQUNwQ3dCLE9BQU87WUFBRWhCLElBQUlpQixPQUFPbkI7UUFBUTtRQUM1Qm9CLE1BQU07WUFBRUMsV0FBVztRQUFLO0lBQzFCO0lBRUF0QixJQUFJdUIsSUFBSSxDQUFDTjtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9wdWJsaXNoL1tpZF0udHM/ZWRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7IFxyXG5cclxuLy8gUFVUIC9hcGkvcHVibGlzaC86aWRcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3QgcG9zdElkID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoe3JlcX0pO1xyXG4gIGNvbnN0IHRva2VuID0gY29va2llcy50b2tlbjtcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcclxuICB9XHJcblxyXG4gIGxldCBkZWNvZGVkVG9rZW47XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGlmICghcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgSldUX1NFQ1JFVCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWNvZGVkVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pO1xyXG4gIH1cclxuICBcclxuICBjb25zdCB1c2VyID0gZGVjb2RlZFRva2VuOyBcclxuICBcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxyXG4gICAgZGF0YTogeyBwdWJsaXNoZWQ6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgcmVzLmpzb24ocG9zdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsInBhcnNlQ29va2llcyIsImp3dCIsImhhbmRsZSIsInJlcSIsInJlcyIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJjb29raWVzIiwidG9rZW4iLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImRlY29kZWRUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiRXJyb3IiLCJ2ZXJpZnkiLCJlcnIiLCJ1c2VyIiwicG9zdCIsInVwZGF0ZSIsIndoZXJlIiwiTnVtYmVyIiwiZGF0YSIsInB1Ymxpc2hlZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/publish/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/publish/[id].ts"));
module.exports = __webpack_exports__;

})();