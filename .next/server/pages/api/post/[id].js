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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_csrf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/csrf */ \"(api)/./lib/csrf.ts\");\n\n\n\n\nconst getServerSideProps = (0,_lib_csrf__WEBPACK_IMPORTED_MODULE_3__.setup)(async (req, res)=>{\n    return {\n        props: {}\n    };\n});\nconst postsPerPage = 10;\nconst handler = async (req, res)=>{\n    const postId = req.query.id;\n    const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)({\n        req\n    });\n    const token = cookies.token;\n    if (req.method === \"GET\") {\n        const page = parseInt(req.query.page) || 1;\n        if (isNaN(page) || page < 1) {\n            res.status(400).json({\n                error: \"Invalid page number\"\n            });\n            return;\n        }\n        const feed = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany({\n            where: {\n                published: true\n            },\n            include: {\n                author: {\n                    select: {\n                        name: true\n                    }\n                }\n            },\n            skip: (page - 1) * postsPerPage,\n            take: postsPerPage\n        });\n        res.status(200).json({\n            posts: feed\n        });\n    } else if (req.method === \"DELETE\") {\n        if (!token) {\n            return res.status(401).send({\n                message: \"Unauthorized\"\n            });\n        }\n        let decodedToken;\n        try {\n            if (!process.env.JWT_SECRET) {\n                throw new Error(\"Missing JWT_SECRET\");\n            }\n            decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n        } catch (err) {\n            return res.status(401).send({\n                message: \"Unauthorized\"\n            });\n        }\n        const user = decodedToken;\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post[\"delete\"]({\n            where: {\n                id: Number(postId)\n            }\n        });\n        res.json(post);\n    } else {\n        throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_csrf__WEBPACK_IMPORTED_MODULE_3__.csrf)(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0Y7QUFDUjtBQUNpQjtBQUd4QyxNQUFNSyxxQkFBcUJGLGdEQUFLQSxDQUFDLE9BQ3RDRyxLQUFxQkMsTUFBeUI7SUFDOUMsT0FBTztRQUNMQyxPQUFPLENBQUM7SUFDVjtBQUNELEdBQUU7QUFFSCxNQUFNQyxlQUFlO0FBRXJCLE1BQU1DLFVBQVUsT0FBT0osS0FBcUJDLE1BQXlCO0lBQ25FLE1BQU1JLFNBQVNMLElBQUlNLEtBQUssQ0FBQ0MsRUFBRTtJQUMzQixNQUFNQyxVQUFVYixxREFBWUEsQ0FBQztRQUFDSztJQUFHO0lBQ2pDLE1BQU1TLFFBQVFELFFBQVFDLEtBQUs7SUFFM0IsSUFBSVQsSUFBSVUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsT0FBT0MsU0FBU1osSUFBSU0sS0FBSyxDQUFDSyxJQUFJLEtBQWU7UUFFbkQsSUFBSUUsTUFBTUYsU0FBU0EsT0FBTyxHQUFHO1lBQzNCVixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXNCO1lBQ3BEO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU12QixpRUFBb0IsQ0FBQztZQUN0QzBCLE9BQU87Z0JBQ0xDLFdBQVc7WUFDYjtZQUNBQyxTQUFTO2dCQUNQQyxRQUFRO29CQUNOQyxRQUFRO3dCQUNOQyxNQUFNO29CQUNSO2dCQUNGO1lBQ0Y7WUFDQUMsTUFBTSxDQUFDZixPQUFPLEtBQUtSO1lBQ25Cd0IsTUFBTXhCO1FBQ1I7UUFFQUYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFYSxPQUFPWDtRQUFLO0lBQ3JDLE9BQU8sSUFBSWpCLElBQUlVLE1BQU0sS0FBSyxVQUFVO1FBQ2xDLElBQUksQ0FBQ0QsT0FBTztZQUNWLE9BQU9SLElBQUlhLE1BQU0sQ0FBQyxLQUFLZSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZTtRQUN4RDtRQUVBLElBQUlDO1FBRUosSUFBSTtZQUNGLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUU7Z0JBQzNCLE1BQU0sSUFBSUMsTUFBTSxzQkFBcUI7WUFDdkM7WUFFQUosZUFBZW5DLDBEQUFVLENBQUNhLE9BQU91QixRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDekQsRUFBRSxPQUFPRyxLQUFLO1lBQ1osT0FBT3BDLElBQUlhLE1BQU0sQ0FBQyxLQUFLZSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZTtRQUN4RDtRQUVBLE1BQU1RLE9BQU9QO1FBRWIsTUFBTWIsT0FBTyxNQUFNeEIsa0VBQWtCLENBQUM7WUFDcEMwQixPQUFPO2dCQUFFYixJQUFJaUMsT0FBT25DO1lBQVE7UUFDOUI7UUFDQUosSUFBSWMsSUFBSSxDQUFDRztJQUNYLE9BQU87UUFDTCxNQUFNLElBQUlpQixNQUNQLFlBQVduQyxJQUFJVSxNQUFPLHlDQUF3QyxFQUNoRTtJQUNIO0FBQ0Y7QUFFQSxpRUFBZVosK0NBQUlBLENBQUNNLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3Bvc3QvW2lkXS50cz8yMWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJzsgXHJcbmltcG9ydCB7IHNldHVwLCBjc3JmIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jc3JmXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHNldHVwKGFzeW5jIChcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sXHJcbiAgfTtcclxuIH0pO1xyXG5cclxuY29uc3QgcG9zdHNQZXJQYWdlID0gMTA7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgcG9zdElkID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoe3JlcX0pO1xyXG4gIGNvbnN0IHRva2VuID0gY29va2llcy50b2tlbjtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChyZXEucXVlcnkucGFnZSBhcyBzdHJpbmcpIHx8IDE7XHJcblxyXG4gICAgaWYgKGlzTmFOKHBhZ2UpIHx8IHBhZ2UgPCAxKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBwYWdlIG51bWJlclwiIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmVlZCA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBza2lwOiAocGFnZSAtIDEpICogcG9zdHNQZXJQYWdlLFxyXG4gICAgICB0YWtlOiBwb3N0c1BlclBhZ2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHBvc3RzOiBmZWVkIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVjb2RlZFRva2VuO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXByb2Nlc3MuZW52LkpXVF9TRUNSRVQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgSldUX1NFQ1JFVCcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkZWNvZGVkVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXNlciA9IGRlY29kZWRUb2tlbjsgXHJcblxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXMuanNvbihwb3N0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgVGhlIEhUVFAgJHtyZXEubWV0aG9kfSBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGlzIHJvdXRlLmBcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NyZihoYW5kbGVyKTtcclxuIl0sIm5hbWVzIjpbInByaXNtYSIsInBhcnNlQ29va2llcyIsImp3dCIsInNldHVwIiwiY3NyZiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsInByb3BzIiwicG9zdHNQZXJQYWdlIiwiaGFuZGxlciIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJjb29raWVzIiwidG9rZW4iLCJtZXRob2QiLCJwYWdlIiwicGFyc2VJbnQiLCJpc05hTiIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImZlZWQiLCJwb3N0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInB1Ymxpc2hlZCIsImluY2x1ZGUiLCJhdXRob3IiLCJzZWxlY3QiLCJuYW1lIiwic2tpcCIsInRha2UiLCJwb3N0cyIsInNlbmQiLCJtZXNzYWdlIiwiZGVjb2RlZFRva2VuIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInZlcmlmeSIsImVyciIsInVzZXIiLCJkZWxldGUiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/[id].ts\n");

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