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
exports.id = "pages/api/uploads";
exports.ids = ["pages/api/uploads"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "(api)/./pages/api/uploads/index.ts":
/*!************************************!*\
  !*** ./pages/api/uploads/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_1__);\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_1___default().v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nconst config = {\n    api: {\n        bodyParser: false // Disabling Next.js's body parser\n    }\n};\n// POST /api/uploads\nasync function handle(req, res) {\n    try {\n        const form = new (formidable__WEBPACK_IMPORTED_MODULE_0___default().IncomingForm)();\n        form.parse(req, async (err, fields, files)=>{\n            let videoPath;\n            if (Array.isArray(files.video)) {\n                // If it's an array, take the path of the first file\n                videoPath = files.video[0].filepath;\n            } else {\n                // If it's not an array, take the path directly\n                videoPath = files.video.filepath;\n            }\n            const response = await cloudinary__WEBPACK_IMPORTED_MODULE_1___default().v2.uploader.upload(videoPath, {\n                resource_type: \"video\"\n            });\n            const url = response.secure_url;\n            return res.status(200).json({\n                url\n            });\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: \"Error uploading video to Cloudinary\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2Fkcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUM7QUFDQTtBQUduQ0MsMkRBQW9CLENBQUM7SUFDakJHLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzdDQyxTQUFTSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtJQUN2Q0MsWUFBWUwsUUFBUUMsR0FBRyxDQUFDSyxxQkFBQUE7QUFDMUI7QUFFTyxNQUFNUixTQUFTO0lBQ3BCUyxLQUFLO1FBQ0hDLFlBQVksS0FBSyxDQUFFO0lBQ3JCO0FBQ0YsRUFBQztBQUVIO0FBQ2UsZUFBZUMsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM5RSxJQUFHO1FBRUgsTUFBTUMsT0FBTyxJQUFJakIsZ0VBQXVCO1FBRXhDaUIsS0FBS0UsS0FBSyxDQUFDSixLQUFLLE9BQU9LLEtBQUtDLFFBQVFDLFFBQVU7WUFDNUMsSUFBSUM7WUFFSixJQUFJQyxNQUFNQyxPQUFPLENBQUNILE1BQU1JLEtBQUssR0FBRztnQkFDOUI7Z0JBQ0FILFlBQVlELE1BQU1JLEtBQUssQ0FBQyxFQUFFLENBQUNDLFFBQVE7WUFDckMsT0FBTztnQkFDTDtnQkFDQUosWUFBWUQsTUFBTUksS0FBSyxDQUFDQyxRQUFRO1lBQ2xDO1lBQ0EsTUFBTUMsV0FBVyxNQUFNM0Isb0VBQTZCLENBQUNzQixXQUFXO2dCQUNoRVEsZUFBZTtZQUNmO1lBQ0EsTUFBTUMsTUFBTUosU0FBU0ssVUFBVTtZQUUvQixPQUFPakIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVIO1lBQUk7UUFDcEM7SUFDRixFQUFFLE9BQU9JLE9BQU87UUFDWnBCLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBc0M7SUFDdEU7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvdXBsb2Fkcy9pbmRleC50cz84ZWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGVcIjtcclxuaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcImNsb3VkaW5hcnlcIjtcclxuXHJcblxyXG5jbG91ZGluYXJ5LnYyLmNvbmZpZyh7XHJcbiAgICBjbG91ZF9uYW1lOiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0NMT1VEX05BTUUsXHJcbiAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXHJcbiAgICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVQsXHJcbiAgfSk7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgYm9keVBhcnNlcjogZmFsc2UsIC8vIERpc2FibGluZyBOZXh0LmpzJ3MgYm9keSBwYXJzZXJcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbi8vIFBPU1QgL2FwaS91cGxvYWRzXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIHRyeXtcclxuXHJcbiAgY29uc3QgZm9ybSA9IG5ldyBmb3JtaWRhYmxlLkluY29taW5nRm9ybSgpO1xyXG5cclxuICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgbGV0IHZpZGVvUGF0aDogRmlsZSB8IEZpbGVbXSB8IGFueTtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxlcy52aWRlbykpIHtcclxuICAgICAgLy8gSWYgaXQncyBhbiBhcnJheSwgdGFrZSB0aGUgcGF0aCBvZiB0aGUgZmlyc3QgZmlsZVxyXG4gICAgICB2aWRlb1BhdGggPSBmaWxlcy52aWRlb1swXS5maWxlcGF0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIGl0J3Mgbm90IGFuIGFycmF5LCB0YWtlIHRoZSBwYXRoIGRpcmVjdGx5XHJcbiAgICAgIHZpZGVvUGF0aCA9IGZpbGVzLnZpZGVvLmZpbGVwYXRoO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLnVwbG9hZCh2aWRlb1BhdGgsIHtcclxuICAgIHJlc291cmNlX3R5cGU6IFwidmlkZW9cIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXJsID0gcmVzcG9uc2Uuc2VjdXJlX3VybDsgICAgXHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXJsIH0pO1xyXG4gIH0pO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciB1cGxvYWRpbmcgdmlkZW8gdG8gQ2xvdWRpbmFyeVwiIH0pO1xyXG4gIH1cclxuICB9XHJcbiJdLCJuYW1lcyI6WyJmb3JtaWRhYmxlIiwiY2xvdWRpbmFyeSIsInYyIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJmb3JtIiwiSW5jb21pbmdGb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsInZpZGVvUGF0aCIsIkFycmF5IiwiaXNBcnJheSIsInZpZGVvIiwiZmlsZXBhdGgiLCJyZXNwb25zZSIsInVwbG9hZGVyIiwidXBsb2FkIiwicmVzb3VyY2VfdHlwZSIsInVybCIsInNlY3VyZV91cmwiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploads/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploads/index.ts"));
module.exports = __webpack_exports__;

})();