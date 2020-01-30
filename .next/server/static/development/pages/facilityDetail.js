module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/facilityDetail.js":
/*!*********************************!*\
  !*** ./pages/facilityDetail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "aws-amplify");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/graphql/queries */ "./src/graphql/queries.js");
var _jsxFileName = "/home/ahmedt/ajisaq/jumm-mis/pages/facilityDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const facilityDetail = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Unpaid Facility Charges for Shops This Month"), __jsx("div", {
  className: "main",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "card-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Detail for ", props.facility.facilityId), __jsx("div", {
  className: "card-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("table", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("tbody", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Facility ID"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, props.facility.facilityId)), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Current Owner"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, props.facility.currentOwner)), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Current Owner Contact"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, props.facility.currentOwnerContact)), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Previous Owner"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, props.facility.previousOwner)), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Previous Owner Contact"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, props.facility.previousOwnerContact)), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Facility Cost"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "N", props.facility.facilityAmount)), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Facility Amount Paid"), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "N", props.facility.amountPaid)))))), __jsx("div", {
  className: "card-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("div", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Payments History"), __jsx("div", {
  className: "card-body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("table", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("thead", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "S/N"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "Date Last Paid"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Month(s) Paid"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Next Due Date"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Processed By"))), __jsx("tbody", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, props.facility.paymentRecords.items.length ? props.facility.paymentRecords.items.map((p, index) => __jsx("tr", {
  key: index,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, index + 1), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, p.paidAt), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, p.monthsPaid), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, p.nextDueDate), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Facility 1"))) : "No History"))))));

facilityDetail.getInitialProps = async function ({
  query
}) {
  let results = null;
  let errors = null;

  try {
    const facility = await aws_amplify__WEBPACK_IMPORTED_MODULE_1__["API"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_1__["graphqlOperation"])(_src_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["getFacility"], {
      id: query.id
    }));
    results = facility.data.getFacility;
  } catch (error) {
    errors = error;
  }

  return {
    facility: results,
    errors: errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (facilityDetail);

/***/ }),

/***/ "./src/graphql/queries.js":
/*!********************************!*\
  !*** ./src/graphql/queries.js ***!
  \********************************/
/*! exports provided: getFacility, listFacilitys, getPaymentRecord, listPaymentRecords, getTicket, listTickets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacility", function() { return getFacility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFacilitys", function() { return listFacilitys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentRecord", function() { return getPaymentRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPaymentRecords", function() { return listPaymentRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTicket", function() { return getTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTickets", function() { return listTickets; });
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getFacility = `query GetFacility($id: ID!) {
  getFacility(id: $id) {
    id
    facilityId
    facilityType
    currentOwner
    currentOwnerContact
    previousOwner
    previousOwnerContact
    createdAt
    updateAt
    lastPaidAt
    nextDueDate
    facilityAmount
    amountPaid
    paymentRecords {
      items {
        id
        paidAt
        monthsPaid
        nextDueDate
      }
      nextToken
    }
  }
}
`;
const listFacilitys = `query ListFacilitys(
  $filter: ModelFacilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listFacilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      facilityId
      facilityType
      currentOwner
      currentOwnerContact
      previousOwner
      previousOwnerContact
      createdAt
      updateAt
      lastPaidAt
      nextDueDate
      facilityAmount
      amountPaid
      paymentRecords {
        nextToken
      }
    }
    nextToken
  }
}
`;
const getPaymentRecord = `query GetPaymentRecord($id: ID!) {
  getPaymentRecord(id: $id) {
    id
    paidAt
    monthsPaid
    nextDueDate
    facility {
      id
      facilityId
      facilityType
      currentOwner
      currentOwnerContact
      previousOwner
      previousOwnerContact
      createdAt
      updateAt
      lastPaidAt
      nextDueDate
      facilityAmount
      amountPaid
      paymentRecords {
        nextToken
      }
    }
  }
}
`;
const listPaymentRecords = `query ListPaymentRecords(
  $filter: ModelPaymentRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listPaymentRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      paidAt
      monthsPaid
      nextDueDate
      facility {
        id
        facilityId
        facilityType
        currentOwner
        currentOwnerContact
        previousOwner
        previousOwnerContact
        createdAt
        updateAt
        lastPaidAt
        nextDueDate
        facilityAmount
        amountPaid
      }
    }
    nextToken
  }
}
`;
const getTicket = `query GetTicket($id: ID!) {
  getTicket(id: $id) {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
const listTickets = `query ListTickets(
  $filter: ModelTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      deviceName
      itemType
      receiptType
      fee
      date
    }
    nextToken
  }
}
`;

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/facilityDetail.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmedt/ajisaq/jumm-mis/pages/facilityDetail.js */"./pages/facilityDetail.js");


/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=facilityDetail.js.map