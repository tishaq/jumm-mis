webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@aws-amplify/core/lib-esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aws-amplify/core/lib-esm/index.js ***!
  \*********************************************************/
/*! exports provided: AWS, ClientDevice, ConsoleLogger, Logger, missingConfig, invalidParameter, Hub, I18n, JS, Signer, Parser, FacebookOAuth, GoogleOAuth, Linking, AppState, AsyncStorage, Credentials, ServiceWorker, StorageHelper, MemoryStorage, Platform, Constants, INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER, INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER, USER_AGENT_HEADER, default, NonRetryableError, retry, jitteredExponentialRetry, Mutex, Reachability */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var _Facet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facet */ "./node_modules/@aws-amplify/core/lib-esm/Facet.js");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ "./node_modules/@aws-amplify/core/lib-esm/Logger/index.js");
/* harmony import */ var _Amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Amplify */ "./node_modules/@aws-amplify/core/lib-esm/Amplify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AWS", function() { return _Facet__WEBPACK_IMPORTED_MODULE_0__["AWS"]; });

/* harmony import */ var _ClientDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientDevice */ "./node_modules/@aws-amplify/core/lib-esm/ClientDevice/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientDevice", function() { return _ClientDevice__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return _Logger__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]; });

/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aws-amplify/core/lib-esm/Errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "missingConfig", function() { return _Errors__WEBPACK_IMPORTED_MODULE_4__["missingConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invalidParameter", function() { return _Errors__WEBPACK_IMPORTED_MODULE_4__["invalidParameter"]; });

/* harmony import */ var _Hub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hub */ "./node_modules/@aws-amplify/core/lib-esm/Hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _Hub__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./I18n */ "./node_modules/@aws-amplify/core/lib-esm/I18n/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return _I18n__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _JS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JS */ "./node_modules/@aws-amplify/core/lib-esm/JS.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JS", function() { return _JS__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Signer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Signer */ "./node_modules/@aws-amplify/core/lib-esm/Signer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signer", function() { return _Signer__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Parser */ "./node_modules/@aws-amplify/core/lib-esm/Parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _Parser__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _OAuthHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OAuthHelper */ "./node_modules/@aws-amplify/core/lib-esm/OAuthHelper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookOAuth", function() { return _OAuthHelper__WEBPACK_IMPORTED_MODULE_10__["FacebookOAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleOAuth", function() { return _OAuthHelper__WEBPACK_IMPORTED_MODULE_10__["GoogleOAuth"]; });

/* harmony import */ var _RNComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RNComponents */ "./node_modules/@aws-amplify/core/lib-esm/RNComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linking", function() { return _RNComponents__WEBPACK_IMPORTED_MODULE_11__["Linking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return _RNComponents__WEBPACK_IMPORTED_MODULE_11__["AppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncStorage", function() { return _RNComponents__WEBPACK_IMPORTED_MODULE_11__["AsyncStorage"]; });

/* harmony import */ var _Credentials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Credentials */ "./node_modules/@aws-amplify/core/lib-esm/Credentials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return _Credentials__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ServiceWorker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ServiceWorker */ "./node_modules/@aws-amplify/core/lib-esm/ServiceWorker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorker", function() { return _ServiceWorker__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _StorageHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./StorageHelper */ "./node_modules/@aws-amplify/core/lib-esm/StorageHelper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageHelper", function() { return _StorageHelper__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryStorage", function() { return _StorageHelper__WEBPACK_IMPORTED_MODULE_14__["MemoryStorage"]; });

/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Platform */ "./node_modules/@aws-amplify/core/lib-esm/Platform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _Platform__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-amplify/core/lib-esm/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER", function() { return _constants__WEBPACK_IMPORTED_MODULE_16__["INTERNAL_AWS_APPSYNC_PUBSUB_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER", function() { return _constants__WEBPACK_IMPORTED_MODULE_16__["INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_AGENT_HEADER", function() { return _constants__WEBPACK_IMPORTED_MODULE_16__["USER_AGENT_HEADER"]; });

/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Util */ "./node_modules/@aws-amplify/core/lib-esm/Util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonRetryableError", function() { return _Util__WEBPACK_IMPORTED_MODULE_17__["NonRetryableError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _Util__WEBPACK_IMPORTED_MODULE_17__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jitteredExponentialRetry", function() { return _Util__WEBPACK_IMPORTED_MODULE_17__["jitteredExponentialRetry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutex", function() { return _Util__WEBPACK_IMPORTED_MODULE_17__["Mutex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reachability", function() { return _Util__WEBPACK_IMPORTED_MODULE_17__["Reachability"]; });

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */



















var Constants = {
    userAgent: _Platform__WEBPACK_IMPORTED_MODULE_15__["default"].userAgent,
};

/* harmony default export */ __webpack_exports__["default"] = (_Amplify__WEBPACK_IMPORTED_MODULE_2__["default"]);

var logger = new _Logger__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('Core');
if (_Facet__WEBPACK_IMPORTED_MODULE_0__["AWS"]['util']) {
    _Facet__WEBPACK_IMPORTED_MODULE_0__["AWS"]['util'].userAgent = function () {
        return Constants.userAgent;
    };
}
else if (_Facet__WEBPACK_IMPORTED_MODULE_0__["AWS"].config) {
    _Facet__WEBPACK_IMPORTED_MODULE_0__["AWS"].config.update({ customUserAgent: Constants.userAgent });
}
else {
    logger.warn('No AWS.config');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/aws-amplify/lib-esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/aws-amplify/lib-esm/index.js ***!
  \***************************************************/
/*! exports provided: default, Auth, Analytics, Storage, API, PubSub, I18n, Logger, Hub, Cache, JS, ClientDevice, Signer, ServiceWorker, Interactions, UI, XR, Predictions, AuthClass, AnalyticsClass, APIClass, StorageClass, PubSubClass, InteractionsClass, XRClass, AWSPinpointProvider, AWSKinesisProvider, AWSKinesisFirehoseProvider, AmazonPersonalizeProvider, graphqlOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/analytics */ "./node_modules/@aws-amplify/analytics/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Analytics", function() { return _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsClass", function() { return _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["AnalyticsClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AWSPinpointProvider", function() { return _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["AWSPinpointProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AWSKinesisProvider", function() { return _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["AWSKinesisProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AWSKinesisFirehoseProvider", function() { return _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["AWSKinesisFirehoseProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AmazonPersonalizeProvider", function() { return _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["AmazonPersonalizeProvider"]; });

/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthClass", function() { return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["AuthClass"]; });

/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/storage */ "./node_modules/@aws-amplify/storage/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageClass", function() { return _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_2__["StorageClass"]; });

/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/api */ "./node_modules/@aws-amplify/api/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API", function() { return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIClass", function() { return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["APIClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphqlOperation", function() { return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["graphqlOperation"]; });

/* harmony import */ var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/pubsub */ "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PubSub", function() { return _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PubSubClass", function() { return _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__["PubSubClass"]; });

/* harmony import */ var _aws_amplify_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/cache */ "./node_modules/@aws-amplify/cache/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _aws_amplify_cache__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/interactions */ "./node_modules/@aws-amplify/interactions/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interactions", function() { return _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractionsClass", function() { return _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_6__["InteractionsClass"]; });

/* harmony import */ var _aws_amplify_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-amplify/ui */ "./node_modules/@aws-amplify/ui/dist/aws-amplify-ui.js");
/* harmony import */ var _aws_amplify_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return _aws_amplify_ui__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _aws_amplify_xr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/xr */ "./node_modules/@aws-amplify/xr/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XR", function() { return _aws_amplify_xr__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XRClass", function() { return _aws_amplify_xr__WEBPACK_IMPORTED_MODULE_8__["XRClass"]; });

/* harmony import */ var _aws_amplify_predictions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/predictions */ "./node_modules/@aws-amplify/predictions/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Predictions", function() { return _aws_amplify_predictions__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["I18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["ConsoleLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JS", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["JS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientDevice", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["ClientDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signer", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["Signer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorker", function() { return _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["ServiceWorker"]; });

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */











/* harmony default export */ __webpack_exports__["default"] = (_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"]);
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Auth = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Analytics = _aws_amplify_analytics__WEBPACK_IMPORTED_MODULE_0__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].API = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Storage = _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_2__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].I18n = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["I18n"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Cache = _aws_amplify_cache__WEBPACK_IMPORTED_MODULE_5__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].PubSub = _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Logger = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["ConsoleLogger"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].ServiceWorker = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["ServiceWorker"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Interactions = _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_6__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].UI = _aws_amplify_ui__WEBPACK_IMPORTED_MODULE_7__;
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].XR = _aws_amplify_xr__WEBPACK_IMPORTED_MODULE_8__["default"];
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__["default"].Predictions = _aws_amplify_predictions__WEBPACK_IMPORTED_MODULE_9__["default"];



//# sourceMappingURL=index.js.map

/***/ })

})
//# sourceMappingURL=_app.js.f9529ffebff6996eae67.hot-update.js.map