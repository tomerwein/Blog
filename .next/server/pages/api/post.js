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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./mongo_util":
/*!********************!*\
  !*** ./mongo_util ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Video\": () => (/* binding */ Video),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst url = process.env.MONGO_DB_URL;\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set('strictQuery',false)\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(url)\r\n\r\nconst videoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\r\n    url: String,\r\n    user: String,\r\n    date: Date,\r\n    id: Number,\r\n})\r\n\r\nconst Video = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Video) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Video', videoSchema)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ Video });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb25nb191dGlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFDaEM7QUFDQTtBQUNBLG1EQUFZO0FBQ1osdURBQWdCO0FBQ2hCO0FBQ0Esd0JBQXdCLHdEQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ08sY0FBYyw4REFBcUIsSUFBSSxxREFBYztBQUM1RDtBQUNBLGlFQUFlLEVBQUUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9tb25nb191dGlsPzQ4OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPX0RCX1VSTDtcclxubW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsZmFsc2UpXHJcbm1vbmdvb3NlLmNvbm5lY3QodXJsKVxyXG5cclxuY29uc3QgdmlkZW9TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVybDogU3RyaW5nLFxyXG4gICAgdXNlcjogU3RyaW5nLFxyXG4gICAgZGF0ZTogRGF0ZSxcclxuICAgIGlkOiBOdW1iZXIsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgVmlkZW8gPSBtb25nb29zZS5tb2RlbHMuVmlkZW8gfHwgbW9uZ29vc2UubW9kZWwoJ1ZpZGVvJywgdmlkZW9TY2hlbWEpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IFZpZGVvIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./mongo_util\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XHJcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxyXG4vL1xyXG4vLyBMZWFybiBtb3JlOlxyXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _mongo_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mongo_util */ \"(api)/./mongo_util\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// POST /api/post\n// Required fields in body: title\n// Optional fields in body: content\nasync function handle(req, res) {\n    const { title , content , token , email , videoUrl  } = req.body;\n    let decodedToken;\n    if (token) {\n        try {\n            if (!process.env.JWT_SECRET) {\n                throw new Error(\"Missing JWT_SECRET\");\n            }\n            decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n        } catch (err) {\n            return res.status(401).send({\n                message: \"Unauthorized\"\n            });\n        }\n        const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.create({\n            data: {\n                title: title,\n                content: content,\n                author: {\n                    connect: {\n                        email: email\n                    }\n                },\n                url: videoUrl\n            }\n        });\n        const resultId = result.id;\n        if (videoUrl) {\n            const videoUrlString = videoUrl.toString();\n            const video = new _mongo_util__WEBPACK_IMPORTED_MODULE_1__.Video({\n                url: videoUrlString,\n                user: email,\n                id: resultId,\n                date: new Date()\n            });\n            try {\n                await video.save();\n            } catch (e) {}\n        } else {\n            const video = new _mongo_util__WEBPACK_IMPORTED_MODULE_1__.Video({\n                url: videoUrl,\n                user: email,\n                id: resultId,\n                date: new Date()\n            });\n            try {\n                await video.save();\n            } catch (e) {}\n        }\n        res.json(result);\n    } else {\n        res.status(401).send({\n            message: \"Unauthorized\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNHO0FBQ2I7QUFFOUI7QUFDQTtBQUNBO0FBQ2UsZUFBZUcsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUU5RSxNQUFNLEVBQUVDLE1BQUFBLEVBQU9DLFFBQUFBLEVBQVNDLE1BQUFBLEVBQU9DLE1BQUFBLEVBQU9DLFNBQUFBLEVBQVMsR0FBR04sSUFBSU8sSUFBSTtJQUUxRCxJQUFJQztJQUVKLElBQUlKLE9BQU87UUFDVCxJQUFJO1lBQ0YsSUFBSSxDQUFDSyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRTtnQkFDM0IsTUFBTSxJQUFJQyxNQUFNLHNCQUFxQjtZQUN2QztZQUVBSixlQUFlViwwREFBVSxDQUFDTSxPQUFPSyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDekQsRUFBRSxPQUFPRyxLQUFLO1lBQ1osT0FBT2IsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFlO1FBQ3hEO1FBRUEsTUFBTUMsU0FBUyxNQUFNdEIsK0RBQWtCLENBQUM7WUFDdEN5QixNQUFNO2dCQUNKbkIsT0FBT0E7Z0JBQ1BDLFNBQVNBO2dCQUNUbUIsUUFBUTtvQkFBRUMsU0FBUzt3QkFBRWxCLE9BQU9BO29CQUFNO2dCQUFFO2dCQUNwQ21CLEtBQUtsQjtZQUNQO1FBQ0Y7UUFFQSxNQUFNbUIsV0FBV1AsT0FBT1EsRUFBRTtRQUUxQixJQUFJcEIsVUFBVTtZQUNaLE1BQU1xQixpQkFBaUJyQixTQUFTc0IsUUFBUTtZQUV4QyxNQUFNQyxRQUFRLElBQUloQyw4Q0FBS0EsQ0FBQztnQkFDdEIyQixLQUFLRztnQkFBZ0JHLE1BQU16QjtnQkFDekJxQixJQUFJRDtnQkFBVU0sTUFBTSxJQUFJQztZQUFNO1lBRWxDLElBQUk7Z0JBQ0osTUFBTUgsTUFBTUksSUFBSTtZQUNoQixFQUFFLE9BQU1DLEdBQUcsQ0FDWDtRQUNGLE9BRUs7WUFDSCxNQUFNTCxRQUFRLElBQUloQyw4Q0FBS0EsQ0FBQztnQkFDdEIyQixLQUFLbEI7Z0JBQVV3QixNQUFNekI7Z0JBQ25CcUIsSUFBSUQ7Z0JBQVVNLE1BQU0sSUFBSUM7WUFBTTtZQUNsQyxJQUFJO2dCQUNGLE1BQU1ILE1BQU1JLElBQUk7WUFDaEIsRUFBRSxPQUFNQyxHQUFHLENBQ1g7UUFDSjtRQUVBakMsSUFBSWtDLElBQUksQ0FBQ2pCO0lBRVgsT0FBTztRQUNMakIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDakQ7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cz84M2Y1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSdcclxuaW1wb3J0IHsgVmlkZW8gfSBmcm9tICcuLi8uLi8uLi9tb25nb191dGlsJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nOyBcclxuXHJcbi8vIFBPU1QgL2FwaS9wb3N0XHJcbi8vIFJlcXVpcmVkIGZpZWxkcyBpbiBib2R5OiB0aXRsZVxyXG4vLyBPcHRpb25hbCBmaWVsZHMgaW4gYm9keTogY29udGVudFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBcclxuICBjb25zdCB7IHRpdGxlLCBjb250ZW50LCB0b2tlbiwgZW1haWwsIHZpZGVvVXJsfSA9IHJlcS5ib2R5O1xyXG4gIFxyXG4gIGxldCBkZWNvZGVkVG9rZW47XHJcbiAgXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXByb2Nlc3MuZW52LkpXVF9TRUNSRVQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgSldUX1NFQ1JFVCcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBkZWNvZGVkVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnBvc3QuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgIGF1dGhvcjogeyBjb25uZWN0OiB7IGVtYWlsOiBlbWFpbCB9IH0sXHJcbiAgICAgICAgdXJsOiB2aWRlb1VybCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXN1bHRJZCA9IHJlc3VsdC5pZDsgICAgXHJcblxyXG4gICAgaWYgKHZpZGVvVXJsKSB7XHJcbiAgICAgIGNvbnN0IHZpZGVvVXJsU3RyaW5nID0gdmlkZW9VcmwudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGNvbnN0IHZpZGVvID0gbmV3IFZpZGVvKHtcclxuICAgICAgICB1cmw6IHZpZGVvVXJsU3RyaW5nLCB1c2VyOiBlbWFpbCxcclxuICAgICAgICAgIGlkOiByZXN1bHRJZCwgZGF0ZTogbmV3IERhdGUoKX0pXHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICBhd2FpdCB2aWRlby5zYXZlKCk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHZpZGVvID0gbmV3IFZpZGVvKHtcclxuICAgICAgICB1cmw6IHZpZGVvVXJsLCB1c2VyOiBlbWFpbCxcclxuICAgICAgICAgIGlkOiByZXN1bHRJZCwgZGF0ZTogbmV3IERhdGUoKX0pXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdmlkZW8uc2F2ZSgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXMuanNvbihyZXN1bHQpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KVxyXG4gIH1cclxuICBcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiVmlkZW8iLCJqd3QiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0b2tlbiIsImVtYWlsIiwidmlkZW9VcmwiLCJib2R5IiwiZGVjb2RlZFRva2VuIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInZlcmlmeSIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwicmVzdWx0IiwicG9zdCIsImNyZWF0ZSIsImRhdGEiLCJhdXRob3IiLCJjb25uZWN0IiwidXJsIiwicmVzdWx0SWQiLCJpZCIsInZpZGVvVXJsU3RyaW5nIiwidG9TdHJpbmciLCJ2aWRlbyIsInVzZXIiLCJkYXRlIiwiRGF0ZSIsInNhdmUiLCJlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();