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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ drawContactScreen)\n/* harmony export */ });\nfunction drawContact() {\n\tconst body = document.body;\n\tconst main = document.createElement('main');\n\tconst contactWrapper = document.createElement('div');\n\tconst title = document.createElement('h1');\n\tconst form = document.createElement('form');\n\tconst inputName = document.createElement('input');\n\tconst inputMail = document.createElement('input');\n\tconst inputMessage = document.createElement('textarea');\n\tconst labelName = document.createElement('label');\n\tconst labelMail = document.createElement('label');\n\tconst labelMessage = document.createElement('label');\n\tconst buttonSubmit = document.createElement('button');\n\n\tcontactWrapper.classList.add('contact-wrapper');\n\n\ttitle.textContent = 'Contact';\n\n\tinputName.id = 'name';\n\tinputMail.id = 'mail';\n\tinputMessage.id = 'message';\n\n\tlabelName.htmlFor = 'name';\n\tlabelMail.htmlFor = 'mail';\n\tlabelMessage.htmlFor = 'message';\n\n\tlabelName.textContent = 'Name';\n\tlabelMail.textContent = 'E-Mail';\n\tlabelMessage.textContent = 'Message';\n\n\tbuttonSubmit.textContent = 'Submit';\n\n\tbody.appendChild(main);\n\tmain.appendChild(contactWrapper);\n\tcontactWrapper.appendChild(form);\n\tform.appendChild(title);\n\tform.appendChild(labelName);\n\tform.appendChild(inputName);\n\tform.appendChild(labelMail);\n\tform.appendChild(inputMail);\n\tform.appendChild(labelMessage);\n\tform.appendChild(inputMessage);\n\tform.appendChild(buttonSubmit);\n}\n\nfunction drawContactScreen() {\n\tdrawContact();\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawContent\": () => (/* binding */ drawContent),\n/* harmony export */   \"drawHeader\": () => (/* binding */ drawHeader)\n/* harmony export */ });\nfunction drawHeader() {\n\tconst body = document.body;\n\tconst header = document.createElement('header');\n\tconst nav = document.createElement('nav');\n\tconst logo = document.createElement('a');\n\tconst ul = document.createElement('ul');\n\tconst liHome = document.createElement('li');\n\tconst liMenu = document.createElement('li');\n\tconst liContact = document.createElement('li');\n\tconst home = document.createElement('a');\n\tconst menu = document.createElement('a');\n\tconst contact = document.createElement('a');\n\n\tlogo.classList.add('logo');\n\tlogo.textContent = 'plantBased.js';\n\thome.textContent = 'Home';\n\thome.classList.add('home');\n\tmenu.textContent = 'Menu';\n\tmenu.classList.add('menu');\n\tcontact.textContent = 'Contact';\n\tcontact.classList.add('contact');\n\n\tbody.appendChild(header);\n\theader.appendChild(nav);\n\tnav.appendChild(logo);\n\tnav.appendChild(ul);\n\tul.appendChild(liHome);\n\tul.appendChild(liMenu);\n\tul.appendChild(liContact);\n\tliHome.appendChild(home);\n\tliMenu.appendChild(menu);\n\tliContact.appendChild(contact);\n}\n\nfunction drawContent() {\n\tconst body = document.body;\n\tconst main = document.createElement('main');\n\n\tfunction drawHero() {\n\t\tconst hero = document.createElement('div');\n\t\tconst img = document.createElement('img');\n\t\tconst title = document.createElement('h1');\n\t\tconst p = document.createElement('p');\n\n\t\thero.classList.add('hero');\n\t\timg.src = '../src/img/header.jpg';\n\t\ttitle.classList.add('title');\n\t\ttitle.textContent = 'Welcome to our restaurant!';\n\t\tp.textContent =\n\t\t\t'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo porro ipsum minus.';\n\n\t\tbody.appendChild(main);\n\t\tmain.appendChild(hero);\n\t\thero.appendChild(img);\n\t\thero.appendChild(title);\n\t\thero.appendChild(p);\n\t}\n\n\tfunction drawDishes() {\n\t\tconst dishes = document.createElement('div');\n\t\tconst firstDish = document.createElement('div');\n\t\tconst secondDish = document.createElement('div');\n\t\tconst imgFirst = document.createElement('img');\n\t\tconst imgSecond = document.createElement('img');\n\t\tconst descriptionFirst = document.createElement('p');\n\t\tconst descriptionSecond = document.createElement('p');\n\n\t\tdishes.classList.add('dishes-section');\n\t\tfirstDish.classList.add('01');\n\t\tsecondDish.classList.add('02');\n\t\timgFirst.src = '../src/img/dishes/01.webp';\n\t\timgSecond.src = '../src/img/dishes/02.png';\n\t\tdescriptionFirst.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\t\t\t\t\t\tVel amet doloremque odit facilis odio, mollitia quas voluptates \n\t\t\t\t\t\t\t\t\t\tplaceat provident laborum aspernatur consequuntur esse dicta eaque \n\t\t\t\t\t\t\t\t\t\tcorporis nobis. Eveniet, quos laboriosam? \n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\t\t\t\t\t\tVel amet doloremque odit facilis odio, mollitia quas voluptates \n\t\t\t\t\t\t\t\t\t\tplaceat provident laborum aspernatur consequuntur esse dicta eaque \n\t\t\t\t\t\t\t\t\t\tcorporis nobis. Eveniet, quos laboriosam.`;\n\t\tdescriptionSecond.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\t\t\t\t\t\t Vel amet doloremque odit facilis odio, mollitia quas voluptates \n\t\t\t\t\t\t\t\t\t \t placeat provident laborum aspernatur consequuntur esse dicta eaque \n\t\t\t\t\t\t\t\t\t\t corporis nobis. Eveniet, quos laboriosam. \n\t\t\t\t\t\t\t\t\t\t Lorem ipsum dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\t\t\t\t\t\t Vel amet doloremque odit facilis odio, mollitia quas voluptates \n\t\t\t\t\t\t\t\t\t\t placeat provident laborum aspernatur consequuntur esse dicta eaque \n\t\t\t\t\t\t\t\t\t\t corporis nobis. Eveniet, quos laboriosam?`;\n\n\t\tmain.appendChild(dishes);\n\t\tdishes.appendChild(firstDish);\n\t\tdishes.appendChild(secondDish);\n\t\tfirstDish.appendChild(imgFirst);\n\t\tfirstDish.appendChild(descriptionFirst);\n\t\tsecondDish.appendChild(imgSecond);\n\t\tsecondDish.appendChild(descriptionSecond);\n\t}\n\n\tfunction drawLogos() {\n\t\tconst logos = document.createElement('div');\n\t\tconst peta = document.createElement('img');\n\t\tconst green = document.createElement('img');\n\t\tconst vegan = document.createElement('img');\n\n\t\tlogos.classList.add('logo-section');\n\t\tpeta.src = '../src/img/logos/peta.png';\n\t\tgreen.src = '../src/img/logos/greenpeace.png';\n\t\tvegan.src = '../src/img/logos/vegan.webp';\n\n\t\tmain.appendChild(logos);\n\t\tlogos.appendChild(peta);\n\t\tlogos.appendChild(green);\n\t\tlogos.appendChild(vegan);\n\t}\n\n\tdrawHero();\n\tdrawDishes();\n\tdrawLogos();\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.drawHeader)();\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.drawContent)();\n\nlet activeTab = 'home';\n\nfunction clearScreen() {\n\tdocument.querySelector('main').remove();\n}\n\nfunction addListeners() {\n\tconst home = document.querySelector('.home');\n\tconst menu = document.querySelector('.menu');\n\tconst contact = document.querySelector('.contact');\n\n\thome.addEventListener('click', () => {\n\t\tif (activeTab !== 'home') {\n\t\t\tclearScreen();\n\t\t\t(0,_home__WEBPACK_IMPORTED_MODULE_0__.drawContent)();\n\t\t\tactiveTab = 'home';\n\t\t}\n\t});\n\n\tmenu.addEventListener('click', () => {\n\t\tif (activeTab !== 'menu') {\n\t\t\tclearScreen();\n\t\t\t(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t\t\tactiveTab = 'menu';\n\t\t}\n\t});\n\n\tcontact.addEventListener('click', () => {\n\t\tif (activeTab !== 'contact') {\n\t\t\tclearScreen();\n\t\t\t(0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t\t\tactiveTab = 'contact';\n\t\t}\n\t});\n}\n\naddListeners();\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ drawMenuScreen)\n/* harmony export */ });\nfunction drawMenu() {\n\tconst body = document.body;\n\tconst main = document.createElement('main');\n\tconst menu = document.createElement('div');\n\tconst title = document.createElement('h2');\n\tconst menuItems = document.createElement('div');\n\n\tmenu.classList.add('menu-screen');\n\ttitle.textContent = 'Menu';\n\tmenuItems.classList.add('menu-items');\n\n\tbody.appendChild(main);\n\tmain.appendChild(menu);\n\tmenu.appendChild(title);\n\tmenu.appendChild(menuItems);\n\n\tfunction drawMenuItems() {\n\t\tfor (let i = 0; i < 9; i++) {\n\t\t\tconst menuItem = document.createElement('div');\n\t\t\tconst itemTitle = document.createElement('h3');\n\t\t\tconst itemDesc = document.createElement('p');\n\t\t\tconst itemPrice = document.createElement('p');\n\n\t\t\titemTitle.textContent = 'Name';\n\t\t\titemDesc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tProvident beatae reiciendis sequi delectus nihil\n\t\t\t\t\t\t\t\t\taccusantium impedit explicabo porro ratione blanditiis qui\n\t\t\t\t\t\t\t\t\tdeserunt voluptatum optio doloribus,\n\t\t\t\t\t\t\t\t\tnatus dolore similique quisquam eligendi.`;\n\t\t\titemPrice.textContent = '$69.99';\n\n\t\t\tmenuItem.classList.add('menu-item');\n\t\t\tmenuItem.appendChild(itemTitle);\n\t\t\tmenuItem.appendChild(itemDesc);\n\t\t\tmenuItem.appendChild(itemPrice);\n\t\t\tmenuItems.appendChild(menuItem);\n\t\t}\n\t}\n\n\tdrawMenuItems();\n}\n\nfunction drawMenuScreen() {\n\tdrawMenu();\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;