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
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
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

/***/ "next-csrf":
/*!****************************!*\
  !*** external "next-csrf" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-csrf");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "(api)/./lib/csrf.ts":
/*!*********************!*\
  !*** ./lib/csrf.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"csrf\": () => (/* binding */ csrf),\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var next_csrf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-csrf */ \"next-csrf\");\n/* harmony import */ var next_csrf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_csrf__WEBPACK_IMPORTED_MODULE_0__);\n// \"lib/csrf\"\n\nconst { csrf , setup  } = (0,next_csrf__WEBPACK_IMPORTED_MODULE_0__.nextCsrf)({\n    secret: process.env.CSRFְְֹֹֹֹֹ_SECRET\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY3NyZi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsYUFBYTtBQUN3QjtBQUVyQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdGLG1EQUFRQSxDQUFDO0lBQ2hDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGtCQUFrQjtBQUN2QztBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvY3NyZi50cz8wOGVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwibGliL2NzcmZcIlxyXG5pbXBvcnQgeyBuZXh0Q3NyZiB9IGZyb20gXCJuZXh0LWNzcmZcIjtcclxuXHJcbmNvbnN0IHsgY3NyZiwgc2V0dXAgfSA9IG5leHRDc3JmKHtcclxuIHNlY3JldDogcHJvY2Vzcy5lbnYuQ1NSRta51rnWuda51rnWsNawX1NFQ1JFVCxcclxufSk7XHJcblxyXG5leHBvcnQgeyBjc3JmLCBzZXR1cCB9OyJdLCJuYW1lcyI6WyJuZXh0Q3NyZiIsImNzcmYiLCJzZXR1cCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJDU1JG1rnWuda51rnWudaw1rBfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/csrf.ts\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XHJcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxyXG4vL1xyXG4vLyBMZWFybiBtb3JlOlxyXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_csrf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/csrf */ \"(api)/./lib/csrf.ts\");\n\n\n\n\nconst getServerSideProps = (0,_lib_csrf__WEBPACK_IMPORTED_MODULE_3__.setup)(async (req, res)=>{\n    return {\n        props: {}\n    };\n});\nconst postsPerPage = 10;\nconst handler = async (req, res)=>{\n    const postId = req.query.id;\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)({\n        req\n    });\n    const token = cookies.token;\n    if (req.method === \"GET\") {\n        const page = parseInt(req.query.page) || 1;\n        if (isNaN(page) || page < 1) {\n            res.status(400).json({\n                error: \"Invalid page number\"\n            });\n            return;\n        }\n        const feed = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany({\n            where: {\n                published: true\n            },\n            include: {\n                author: {\n                    select: {\n                        name: true\n                    }\n                }\n            },\n            skip: (page - 1) * postsPerPage,\n            take: postsPerPage\n        });\n        res.status(200).json({\n            posts: feed\n        });\n    } else if (req.method === \"DELETE\") {\n        if (!token) {\n            return res.status(401).send({\n                message: \"Unauthorized\"\n            });\n        }\n        let decodedToken;\n        try {\n            if (!process.env.JWT_SECRET) {\n                throw new Error(\"Missing JWT_SECRET\");\n            }\n            decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n        } catch (err) {\n            return res.status(401).send({\n                message: \"Unauthorized\"\n            });\n        }\n        const user = decodedToken;\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post[\"delete\"]({\n            where: {\n                id: Number(postId)\n            }\n        });\n        res.json(post);\n    } else {\n        throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0Y7QUFDUjtBQUNpQjtBQUd4QyxNQUFNSSxxQkFBcUJELGdEQUFLQSxDQUFDLE9BQ3RDRSxLQUFxQkMsTUFBeUI7SUFDOUMsT0FBTztRQUNMQyxPQUFPLENBQUM7SUFDVjtBQUNELEdBQUU7QUFFSCxNQUFNQyxlQUFlO0FBRXJCLE1BQU1DLFVBQVUsT0FBT0osS0FBcUJDLE1BQXlCO0lBQ25FLE1BQU1JLFNBQVNMLElBQUlNLEtBQUssQ0FBQ0MsRUFBRTtJQUMzQixNQUFNQyxVQUFVWixxREFBWUEsQ0FBQztRQUFDSTtJQUFHO0lBQ2pDLE1BQU1TLFFBQVFELFFBQVFDLEtBQUs7SUFFM0IsSUFBSVQsSUFBSVUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsT0FBT0MsU0FBU1osSUFBSU0sS0FBSyxDQUFDSyxJQUFJLEtBQWU7UUFFbkQsSUFBSUUsTUFBTUYsU0FBU0EsT0FBTyxHQUFHO1lBQzNCVixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXNCO1lBQ3BEO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU10QixpRUFBb0IsQ0FBQztZQUN0Q3lCLE9BQU87Z0JBQ0xDLFdBQVc7WUFDYjtZQUNBQyxTQUFTO2dCQUNQQyxRQUFRO29CQUNOQyxRQUFRO3dCQUNOQyxNQUFNO29CQUNSO2dCQUNGO1lBQ0Y7WUFDQUMsTUFBTSxDQUFDZixPQUFPLEtBQUtSO1lBQ25Cd0IsTUFBTXhCO1FBQ1I7UUFFQUYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFYSxPQUFPWDtRQUFLO0lBQ3JDLE9BQU8sSUFBSWpCLElBQUlVLE1BQU0sS0FBSyxVQUFVO1FBQ2xDLElBQUksQ0FBQ0QsT0FBTztZQUNWLE9BQU9SLElBQUlhLE1BQU0sQ0FBQyxLQUFLZSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZTtRQUN4RDtRQUVBLElBQUlDO1FBRUosSUFBSTtZQUNGLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUU7Z0JBQzNCLE1BQU0sSUFBSUMsTUFBTSxzQkFBcUI7WUFDdkM7WUFFQUosZUFBZWxDLDBEQUFVLENBQUNZLE9BQU91QixRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDekQsRUFBRSxPQUFPRyxLQUFLO1lBQ1osT0FBT3BDLElBQUlhLE1BQU0sQ0FBQyxLQUFLZSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZTtRQUN4RDtRQUVBLE1BQU1RLE9BQU9QO1FBRWIsTUFBTWIsT0FBTyxNQUFNdkIsa0VBQWtCLENBQUM7WUFDcEN5QixPQUFPO2dCQUFFYixJQUFJaUMsT0FBT25DO1lBQVE7UUFDOUI7UUFDQUosSUFBSWMsSUFBSSxDQUFDRztJQUNYLE9BQU87UUFDTCxNQUFNLElBQUlpQixNQUNQLFlBQVduQyxJQUFJVSxNQUFPLHlDQUF3QyxFQUNoRTtJQUNIO0FBQ0Y7QUFFQSxpRUFBZU4sT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzPzIxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nOyBcclxuaW1wb3J0IHsgc2V0dXAsIGNzcmYgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NzcmZcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gc2V0dXAoYXN5bmMgKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSxcclxuICB9O1xyXG4gfSk7XHJcblxyXG5jb25zdCBwb3N0c1BlclBhZ2UgPSAxMDtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnkuaWQ7XHJcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyh7cmVxfSk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzLnRva2VuO1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlIGFzIHN0cmluZykgfHwgMTtcclxuXHJcbiAgICBpZiAoaXNOYU4ocGFnZSkgfHwgcGFnZSA8IDEpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHBhZ2UgbnVtYmVyXCIgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZWVkID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNraXA6IChwYWdlIC0gMSkgKiBwb3N0c1BlclBhZ2UsXHJcbiAgICAgIHRha2U6IHBvc3RzUGVyUGFnZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcG9zdHM6IGZlZWQgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWNvZGVkVG9rZW47XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBKV1RfU0VDUkVUJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyID0gZGVjb2RlZFRva2VuOyBcclxuXHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihwb3N0SWQpIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcy5qc29uKHBvc3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBUaGUgSFRUUCAke3JlcS5tZXRob2R9IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoaXMgcm91dGUuYFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsicHJpc21hIiwicGFyc2VDb29raWVzIiwiand0Iiwic2V0dXAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJwcm9wcyIsInBvc3RzUGVyUGFnZSIsImhhbmRsZXIiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwiY29va2llcyIsInRva2VuIiwibWV0aG9kIiwicGFnZSIsInBhcnNlSW50IiwiaXNOYU4iLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmZWVkIiwicG9zdCIsImZpbmRNYW55Iiwid2hlcmUiLCJwdWJsaXNoZWQiLCJpbmNsdWRlIiwiYXV0aG9yIiwic2VsZWN0IiwibmFtZSIsInNraXAiLCJ0YWtlIiwicG9zdHMiLCJzZW5kIiwibWVzc2FnZSIsImRlY29kZWRUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiRXJyb3IiLCJ2ZXJpZnkiLCJlcnIiLCJ1c2VyIiwiZGVsZXRlIiwiTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();