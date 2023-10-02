/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arta/./src/style.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nlet annualPayment = '$39.99';\r\nlet weeklyAccess = '$6.99';\r\nlet yearlyAccess = '$0.48'\r\n\r\nfunction changeTranslation(language) {\r\n  fetch(`i18n/${language}.json`)\r\n    .then((response) => response.json())\r\n    .then((translations) => {\r\n      document.getElementById('title').innerHTML = translations['Get Unlimited <br>Access'];\r\n      document.getElementById('itemOne').innerHTML = translations['Unlimited Art <br>Creation'];\r\n      document.getElementById('itemTwo').innerHTML = translations['Exclusive <br>Styles'];\r\n      document.getElementById('itemThree').innerHTML = translations['Magic Avatars <br>With 20% Off'];\r\n      document.getElementById('offerYearly').innerHTML = translations['YEARLY ACCESS'];\r\n      document.getElementById('badgeBestOffer').innerHTML = translations['BEST OFFER'];\r\n      document.getElementById('offerYearlyPrice').innerHTML = translations['Just {{price}} per year'].replace('{{price}}', annualPayment);\r\n      document.getElementById('offerWeekly').innerHTML = translations['WEEKLY ACCESS'];\r\n      document.getElementById('weeklyOfferWeeklyPayment').innerHTML = translations['{{price}} <br>per week'].replace('{{price}}', weeklyAccess);\r\n      document.getElementById('annualOfferWeeklyPayment').innerHTML = translations['{{price}} <br>per week'].replace('{{price}}', yearlyAccess);\r\n      document.getElementById('termsOfUse').innerHTML = translations['Terms of Use'];\r\n      document.getElementById('privacyPolicy').innerHTML = translations['Privacy Policy'];\r\n      document.getElementById('restore').innerHTML = translations['Restore'];\r\n      document.getElementById('continue').innerHTML = translations['Continue'];\r\n    })\r\n    .catch((error) => {\r\n      console.error('problem loading translation', language, error);\r\n      if (language !== 'en') {\r\n        changeTranslation('en');\r\n      }\r\n    });\r\n}\r\n\r\nconst urlSearchParams = new URLSearchParams(window.location.search);\r\nconst lang = urlSearchParams.get('lang');\r\nconst availableLang = ['de', 'en', 'es', 'fr', 'ja', 'pt'];\r\nconst systemLang = navigator.language.substr(0, 2);\r\nlet selectedLang;\r\n\r\nif (availableLang.includes(lang)) {\r\n  selectedLang = lang;\r\n} else if (availableLang.includes(systemLang)) {\r\n  selectedLang = systemLang;\r\n} else {\r\n  selectedLang = 'en';\r\n}\r\nchangeTranslation(selectedLang);\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n  const specificLang = document.querySelectorAll('.lang-special');\r\n  specificLang.forEach((el) => {\r\n    el.classList.add(`lang-${selectedLang}`);\r\n  });\r\n});\r\n\r\nconst buttonContinue = document.getElementById('continue');\r\nconst radioButtons = document.querySelectorAll('.input-plan');\r\n\r\nbuttonContinue.addEventListener('click', () => {\r\n  const selectedTariffPlan = document.querySelector('.input-plan:checked');\r\n  if (selectedTariffPlan) {\r\n    const linkTariffPlan = selectedTariffPlan.value;\r\n    window.location.href = linkTariffPlan;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://arta/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;