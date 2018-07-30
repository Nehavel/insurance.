(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: column;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    align-content: space-between;\r\n      }\r\n.row\r\n{\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    align-content: space-between; \r\n}\r\n.black\r\n{\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n<div class=\"row\">\n<div class=\"flex-container\">\n  <h1>ABOUT Free</h1>\n<p>The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon, which doubtless no one has yet forgotten. Not to mention rumours which agitated the maritime population and excited the public mind, even in the interior of continents, seafaring men were particularly excited. Merchants, common sailors, captains of vessels, skippers, both of Europe and America, naval officers of all countries, and the Governments of several States on the two continents, were deeply interested in the matter.</p>\n<p>For some time past vessels had been met by “an enormous thing,” a long object, spindle-shaped, occasionally phosphorescent, and infinitely larger and more rapid in its movements than a whale.</p>\n<p>\n  The facts relating to this apparition (entered in various log-books) agreed in most respects as to the shape of the object or creature in question, the untiring rapidity of its movements, its surprising power of locomotion, and the peculiar life with which it seemed endowed. If it was a whale, it surpassed in size all those hitherto classified in science. Taking into consideration the mean of observations made at divers times—rejecting the timid estimate of those who assigned to this object a length of two hundred feet, equally with the exaggerated opinions which set it down as a mile in width and three in length—we might fairly conclude that this mysterious being surpassed greatly all dimensions admitted by the learned ones of the day, if it existed at all. And that it DID exist was an undeniable fact; and, with that tendency which disposes the human mind in favour of the marvellous, we can understand the excitement produced in the entire world by this supernatural apparition. As to classing it in the list of fables, the idea was out of the question.\n</p>\n<p>\n  On the 20th of July, 1866, the steamer Governor Higginson, of the Calcutta and Burnach Steam Navigation Company, had met this moving mass five miles off the east coast of Australia. Captain Baker thought at first that he was in the presence of an unknown sandbank; he even prepared to determine its exact position when two columns of water, projected by the mysterious object, shot with a hissing noise a hundred and fifty feet up into the air. Now, unless the sandbank had been submitted to the intermittent eruption of a geyser, the Governor Higginson had to do neither more nor less than with an aquatic mammal, unknown till then, which threw up from its blow-holes columns of water mixed with air and vapour.\n</p>\n<div>\n  \n</div>\n</div>\n<div>\n  <app-ver-mov></app-ver-mov>\n</div>\n</div>\n<div class=\"black\">\n<app-move></app-move>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boat/boat.component */ "./src/app/boat/boat.component.ts");
/* harmony import */ var _head_content_head_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./head-content/head-content.component */ "./src/app/head-content/head-content.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _move_move_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./move/move.component */ "./src/app/move/move.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ver_mov_ver_mov_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ver-mov/ver-mov.component */ "./src/app/ver-mov/ver-mov.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _right_right_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./right/right.component */ "./src/app/right/right.component.ts");
/* harmony import */ var _left_left_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./left/left.component */ "./src/app/left/left.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _boat_boat_component__WEBPACK_IMPORTED_MODULE_10__["BoatComponent"],
                _head_content_head_content_component__WEBPACK_IMPORTED_MODULE_11__["HeadContentComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_12__["HelpComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _move_move_component__WEBPACK_IMPORTED_MODULE_14__["MoveComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _ver_mov_ver_mov_component__WEBPACK_IMPORTED_MODULE_19__["VerMovComponent"],
                _right_right_component__WEBPACK_IMPORTED_MODULE_21__["RightComponent"],
                _left_left_component__WEBPACK_IMPORTED_MODULE_22__["LeftComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_17__["routes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boat/boat.component.css":
/*!*****************************************!*\
  !*** ./src/app/boat/boat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: column;\r\n      }\r\nh1{\r\n    margin-top: 100px; \r\n  \r\n}\r\nh3{\r\n    margin-left: 20px;\r\n}\r\n#cc{\r\n    color: white;\r\ndisplay: flex;\r\njustify-content:center;\r\nalign-items: center; \r\n/* background-color: #f1f1f1;\r\n  width: 100px;\r\n  margin: 10px;\r\n  text-align: center;\r\n  line-height: 75px;\r\n  font-size: 30px;\r\n  justify-content:center; */\r\n}\r\nbutton{\r\n    border-radius: 40%;\r\n}"

/***/ }),

/***/ "./src/app/boat/boat.component.html":
/*!******************************************!*\
  !*** ./src/app/boat/boat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n<h1 id=\"cc\">\n  Protect Your Family With Insurance.\n</h1>\n<h3 id=\"cc\">\n      I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.\n</h3>\n<div id=\"cc\">\n<button mat-raised-button>Find Out More</button>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/boat/boat.component.ts":
/*!****************************************!*\
  !*** ./src/app/boat/boat.component.ts ***!
  \****************************************/
/*! exports provided: BoatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatComponent", function() { return BoatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoatComponent = /** @class */ (function () {
    function BoatComponent() {
    }
    BoatComponent.prototype.ngOnInit = function () {
    };
    BoatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boat',
            template: __webpack_require__(/*! ./boat.component.html */ "./src/app/boat/boat.component.html"),
            styles: [__webpack_require__(/*! ./boat.component.css */ "./src/app/boat/boat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoatComponent);
    return BoatComponent;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n\r\n    /* width: 50%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 5%;\r\n    /* margin-left: 40%; */\r\n      }\r\n      /* .mat-form-field-infix \r\n      {\r\n          width: 359px;\r\n      } */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Your Name (required)\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <textarea matInput placeholder=\"Your Email (required)\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea matInput placeholder=\"Subject\"></textarea>\n      </mat-form-field>\n\n      <mat-form-field>\n          <textarea matInput placeholder=\"Your Message\"></textarea>\n        </mat-form-field>\n        <div>\n            <button mat-stroked-button color=\"primary\">Send</button>\n          </div> \n  </div>\n  "

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/contact-form/contact-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: row;\r\n      }\r\n/* h1{\r\n    margin-top: 100px; \r\n  \r\n} */\r\np{\r\n    margin-left: 20px;\r\n    color: white;\r\n}\r\n#cc{\r\n    color: white;\r\ndisplay: flex;\r\njustify-content:center;\r\nalign-items: center; \r\n}\r\n/* #img\r\n{\r\n    height: 10vh;\r\n    width: 50vw;\r\n} */\r\niframe {\r\n    height: 303px;\r\n    width: 600px;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <div id=\"img\">\n        <div style=\"width: 100%\"><iframe width=\"100%\" height=\"600\" src=\"https://maps.google.com/maps?width=100%&height=600&hl=en&q=Sy%20No.115%2C%20Ranga%20Reddy%2C%20Financial%20District%2C%20Nanakram%20Guda%2C%20Hyderabad%2C%20Telangana%20500032+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a href=\"https://www.mapsdirections.info/en/custom-google-maps/\">Embed Google Map</a> by <a href=\"https://www.mapsdirections.info/en/\">Measure area on map</a></iframe></div><br />\n    </div>\n        <div>\n<h1 id=\"cc\"> To Find Us </h1>\n<p id=\"cc\">We are located in Nanakram Guda, Hyderabad. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n</p>\n<br>\n<p>\nSy No.115, Ranga Reddy,<br> Financial District, Nanakram Guda,<br> Hyderabad, Telangana 500032\n</p>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/head-content/head-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/head-content/head-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 p{\r\n    text-align: justify;\r\n}"

/***/ }),

/***/ "./src/app/head-content/head-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/head-content/head-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>This is heading element</h1>\n<p>\nFrom insurance website research, we have got that an insurance website should have service section to show its provided insurances services in front of their visitors. this insurance theme has a credible Service section that can help you to do convert your visitors into real clients. So, you can use this WP theme effortlessly.\n</p>\n<p>\nYou will be glad to know that you can customize your website according to your demand. Further, you don’ need to do any programming on coding skill.  You will be able to change for any kind of customization using theme customizer. By using color options, you can change the color according to your need. You can change any section from your site without any troubles. In Insurance Now Pro theme, we have added one-click demo installation. You can make your website like our demo with the help of one-click demo installation.So, this feature will save your valuable time.\n</p>\n"

/***/ }),

/***/ "./src/app/head-content/head-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/head-content/head-content.component.ts ***!
  \********************************************************/
/*! exports provided: HeadContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadContentComponent", function() { return HeadContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadContentComponent = /** @class */ (function () {
    function HeadContentComponent() {
    }
    HeadContentComponent.prototype.ngOnInit = function () {
    };
    HeadContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head-content',
            template: __webpack_require__(/*! ./head-content.component.html */ "./src/app/head-content/head-content.component.html"),
            styles: [__webpack_require__(/*! ./head-content.component.css */ "./src/app/head-content/head-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadContentComponent);
    return HeadContentComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    background-color: none;\r\n}\r\n#right\r\n{\r\n    margin-top: 26px;\r\n    margin-right: 5px;\r\n    float:right;\r\n    font-size: 25px;\r\n}\r\ni:hover\r\n{\r\n    color:\r\n    #0066cc;\r\n}\r\n/* mouse over link */\r\n/* a:hover {\r\n    color: '#4dff4d';\r\n    text-decoration: none;\r\n} */\r\n/* selected link */\r\n/* a:active {\r\n    color:red;\r\n    text-decoration: none;\r\n} */\r\na:link {\r\n    color: #4dff4d;\r\n    text-decoration: none;\r\n}\r\na:visited {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\na:hover {\r\n    color: #4dff4d;\r\n    text-decoration: none;\r\n}\r\n#maincontainer{\r\n    background-color:  #cccccc;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"maincontainer\">\n    <img src=\"../../assets/logo2.png\" alt=\"logo\">\n\n\n    <button mat-button (mouseenter)=\"amenuActive=true\"\n    (mouseleave)=\"amenuActive=false\" \n    [style.color]=\" amenuActive ? '#4dff4d' : 'black' \"><a routerLink=\"/\">Home</a></button>\n\n    <button mat-button (mouseenter)=\"bmenuActive=true\"\n    (mouseleave)=\"bmenuActive=false\" \n    [style.color]=\" bmenuActive ? '#4dff4d' : 'black' \"><a routerLink=\"/About\">About</a></button>\n\n    <button mat-button [matMenuTriggerFor]=\"menu\" (mouseenter)=\"menuActive=true\"\n    (mouseleave)=\"menuActive=false\" \n    [style.color]=\" menuActive ? '#4dff4d' : 'black' \">Menu</button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item><a routerLink=\"/left\">Left</a></button>\n      <button mat-menu-item><a routerLink=\"/right\">Right</a></button>\n      \n    </mat-menu>\n\n    <button mat-button (mouseenter)=\"menuActive=true\"\n    (mouseleave)=\"menuActive=false\" \n    [style.color]=\" menuActive ? '#4dff4d' : 'black' \"><a routerLink=\"/contactform\">Contact</a></button>\n\n\n      <div id=\"right\">\n      <i class=\"fab fa-facebook\"></i>&nbsp;&nbsp;&nbsp;\n      <i class=\"fab fa-twitter-square\"></i>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: column;\r\n      }\r\nh3{\r\n    margin-left: 20px;\r\n}\r\n#cc{\r\n    color: white;\r\ndisplay: flex;\r\njustify-content:center;\r\nalign-items: center; \r\n\r\n}\r\nbutton{\r\n    border-radius: 40%;\r\n}"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n<h1 id=\"cc\"> We Can Help </h1>\n<h3 id=\"cc\">\nWe offer a wealth of other insurance products including Home Insurance, Travel Insurance, Pet Insurance and Van Insurance. This means that we can offer all your insurance needs in one place and with our existing customer discounts we could save you time and money.\n</h3>\n<h3 id=\"cc\">\nAs we were voted Best Insurance Provider by consumers four years running you know that you are in good hands with us. Every 12 seconds a new customer joins our insurance Group, get a quote today and see how much you could save.\n</h3>\n<div id=\"cc\">\n  <button mat-raised-button>Find Out More</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*[parallax] {\r\n    width: 99vw;\r\n    height: 80vh;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: row;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n      }\r\n#aa\r\n{\r\n    width: 99vw;\r\n    height: 50vh;  \r\n}\r\n#first-page {\r\n    background-image: url('boat.jpg');\r\n    background-attachment: fixed;\r\n    \r\n}\r\n#third-page {\r\n    background-image: url('table.jpg')\r\n}\r\n#contact\r\n{ width: 99vw;\r\n    height: 50vh;\r\n    background-color:#9c3;\r\n}\r\n#move\r\n{\r\n    width: 99vw;\r\n    height: 50vh;\r\n    background-color:black;  \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div parallax id=\"first-page\">\n  <app-boat></app-boat>\n</div>\n<div id=\"aa\">\n  <app-head-content></app-head-content>\n</div>\n<div parallax id=\"third-page\">\n  <app-help></app-help>\n</div>\n<div class=\"flex-container\">\n  <app-head-content></app-head-content>\n  <app-head-content></app-head-content>\n</div>\n<div id=\"contact\">\n  <app-contact></app-contact>\n</div>\n<div id=\"move\">\n  <app-move></app-move>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/left/left.component.css":
/*!*****************************************!*\
  !*** ./src/app/left/left.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: column;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    align-content: space-between;\r\n      }\r\n.row\r\n{\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    align-content: space-between; \r\n}\r\n.black\r\n{\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/left/left.component.html":
/*!******************************************!*\
  !*** ./src/app/left/left.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <div class=\"row\">\n        <div>\n            <app-ver-mov></app-ver-mov>\n          </div>\n    <div class=\"flex-container\">\n      <h1>Left Sidebar</h1>\n    <p>The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon, which doubtless no one has yet forgotten. Not to mention rumours which agitated the maritime population and excited the public mind, even in the interior of continents, seafaring men were particularly excited. Merchants, common sailors, captains of vessels, skippers, both of Europe and America, naval officers of all countries, and the Governments of several States on the two continents, were deeply interested in the matter.</p>\n    <p>For some time past vessels had been met by “an enormous thing,” a long object, spindle-shaped, occasionally phosphorescent, and infinitely larger and more rapid in its movements than a whale.</p>\n    <p>\n      The facts relating to this apparition (entered in various log-books) agreed in most respects as to the shape of the object or creature in question, the untiring rapidity of its movements, its surprising power of locomotion, and the peculiar life with which it seemed endowed. If it was a whale, it surpassed in size all those hitherto classified in science. Taking into consideration the mean of observations made at divers times—rejecting the timid estimate of those who assigned to this object a length of two hundred feet, equally with the exaggerated opinions which set it down as a mile in width and three in length—we might fairly conclude that this mysterious being surpassed greatly all dimensions admitted by the learned ones of the day, if it existed at all. And that it DID exist was an undeniable fact; and, with that tendency which disposes the human mind in favour of the marvellous, we can understand the excitement produced in the entire world by this supernatural apparition. As to classing it in the list of fables, the idea was out of the question.\n    </p>\n    <p>\n      On the 20th of July, 1866, the steamer Governor Higginson, of the Calcutta and Burnach Steam Navigation Company, had met this moving mass five miles off the east coast of Australia. Captain Baker thought at first that he was in the presence of an unknown sandbank; he even prepared to determine its exact position when two columns of water, projected by the mysterious object, shot with a hissing noise a hundred and fifty feet up into the air. Now, unless the sandbank had been submitted to the intermittent eruption of a geyser, the Governor Higginson had to do neither more nor less than with an aquatic mammal, unknown till then, which threw up from its blow-holes columns of water mixed with air and vapour.\n    </p>\n    <div>\n      \n    </div>\n    </div>\n   \n    </div>\n    <div class=\"black\">\n    <app-move></app-move>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/left/left.component.ts":
/*!****************************************!*\
  !*** ./src/app/left/left.component.ts ***!
  \****************************************/
/*! exports provided: LeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftComponent", function() { return LeftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftComponent = /** @class */ (function () {
    function LeftComponent() {
    }
    LeftComponent.prototype.ngOnInit = function () {
    };
    LeftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left',
            template: __webpack_require__(/*! ./left.component.html */ "./src/app/left/left.component.html"),
            styles: [__webpack_require__(/*! ./left.component.css */ "./src/app/left/left.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftComponent);
    return LeftComponent;
}());



/***/ }),

/***/ "./src/app/move/move.component.css":
/*!*****************************************!*\
  !*** ./src/app/move/move.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: row;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    color: aliceblue;\r\n    align-content: space-between;\r\n      }\r\n.center {\r\n    text-align: justify;\r\n    width: 30vw;\r\n}"

/***/ }),

/***/ "./src/app/move/move.component.html":
/*!******************************************!*\
  !*** ./src/app/move/move.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n<div>\n<div *ngFor=\"let c of RecentPost\">\n <p>\n    <i class=\"material-icons\">tab</i>\n   {{c.name}}</p> \n</div>\n</div>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<div>\n<div *ngFor=\"let c of RecentComments\">\n    <p><i class=\"material-icons\">timeline</i>\n  {{c.name}}</p> \n </div>\n </div>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n <div>\n <div *ngFor=\"let c of Archives\">\n    <p><i class=\"material-icons\">view_list</i>\n   {{c.name}}</p> \n   </div>\n   </div>\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<div>\n  <h3>More About Our Business </h3>\n  <p class=\"center\">\n      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.</p>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/move/move.component.ts":
/*!****************************************!*\
  !*** ./src/app/move/move.component.ts ***!
  \****************************************/
/*! exports provided: MoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveComponent", function() { return MoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoveComponent = /** @class */ (function () {
    function MoveComponent() {
        this.RecentPost = [
            { 'name': ' The Land of The Vikings', 'url': '' },
            { 'name': 'Hello world!', 'url': '' },
            { 'name': ' The Key To A Quality', 'url': '' },
            { 'name': 'The Door In The Wall', 'url': '' },
            { 'name': ' Now Is The Time To Rebrand', 'url': '' }
        ];
        this.RecentComments = [
            { 'name': ' A WordPress Commenter on Hello world!', 'url': '' },
            { 'name': 'Maria on Woo Ninja', 'url': '' },
            { 'name': ' Maria on Premium Quality', 'url': '' },
            { 'name': 'Maria on Woo Logo', 'url': '' },
            { 'name': 'Maria on Ninja Silhouette', 'url': '' }
        ];
        this.Archives = [
            { 'name': 'October 2017', 'url': '' },
            { 'name': 'September 2017', 'url': '' },
            { 'name': 'April 2017', 'url': '' },
            { 'name': 'March 2017', 'url': '' },
            { 'name': 'February 2017', 'url': '' }
        ];
    }
    MoveComponent.prototype.ngOnInit = function () {
    };
    MoveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-move',
            template: __webpack_require__(/*! ./move.component.html */ "./src/app/move/move.component.html"),
            styles: [__webpack_require__(/*! ./move.component.css */ "./src/app/move/move.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoveComponent);
    return MoveComponent;
}());



/***/ }),

/***/ "./src/app/right/right.component.css":
/*!*******************************************!*\
  !*** ./src/app/right/right.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: column;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    align-content: space-between;\r\n      }\r\n.row\r\n{\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    align-content: space-between; \r\n}\r\n.black\r\n{\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/right/right.component.html":
/*!********************************************!*\
  !*** ./src/app/right/right.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <div class=\"row\">\n    <div class=\"flex-container\">\n      <h1>Right Sidebar</h1>\n    <p>The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon, which doubtless no one has yet forgotten. Not to mention rumours which agitated the maritime population and excited the public mind, even in the interior of continents, seafaring men were particularly excited. Merchants, common sailors, captains of vessels, skippers, both of Europe and America, naval officers of all countries, and the Governments of several States on the two continents, were deeply interested in the matter.</p>\n    <p>For some time past vessels had been met by “an enormous thing,” a long object, spindle-shaped, occasionally phosphorescent, and infinitely larger and more rapid in its movements than a whale.</p>\n    <p>\n      The facts relating to this apparition (entered in various log-books) agreed in most respects as to the shape of the object or creature in question, the untiring rapidity of its movements, its surprising power of locomotion, and the peculiar life with which it seemed endowed. If it was a whale, it surpassed in size all those hitherto classified in science. Taking into consideration the mean of observations made at divers times—rejecting the timid estimate of those who assigned to this object a length of two hundred feet, equally with the exaggerated opinions which set it down as a mile in width and three in length—we might fairly conclude that this mysterious being surpassed greatly all dimensions admitted by the learned ones of the day, if it existed at all. And that it DID exist was an undeniable fact; and, with that tendency which disposes the human mind in favour of the marvellous, we can understand the excitement produced in the entire world by this supernatural apparition. As to classing it in the list of fables, the idea was out of the question.\n    </p>\n    <p>\n      On the 20th of July, 1866, the steamer Governor Higginson, of the Calcutta and Burnach Steam Navigation Company, had met this moving mass five miles off the east coast of Australia. Captain Baker thought at first that he was in the presence of an unknown sandbank; he even prepared to determine its exact position when two columns of water, projected by the mysterious object, shot with a hissing noise a hundred and fifty feet up into the air. Now, unless the sandbank had been submitted to the intermittent eruption of a geyser, the Governor Higginson had to do neither more nor less than with an aquatic mammal, unknown till then, which threw up from its blow-holes columns of water mixed with air and vapour.\n    </p>\n    <div>\n      \n    </div>\n    </div>\n    <div>\n      <app-ver-mov></app-ver-mov>\n    </div>\n    </div>\n    <div class=\"black\">\n    <app-move></app-move>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/right/right.component.ts":
/*!******************************************!*\
  !*** ./src/app/right/right.component.ts ***!
  \******************************************/
/*! exports provided: RightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightComponent", function() { return RightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightComponent = /** @class */ (function () {
    function RightComponent() {
    }
    RightComponent.prototype.ngOnInit = function () {
    };
    RightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right',
            template: __webpack_require__(/*! ./right.component.html */ "./src/app/right/right.component.html"),
            styles: [__webpack_require__(/*! ./right.component.css */ "./src/app/right/right.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RightComponent);
    return RightComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _app_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_right_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/right/right.component */ "./src/app/right/right.component.ts");
/* harmony import */ var _left_left_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left/left.component */ "./src/app/left/left.component.ts");





var routes = [
    {
        path: '',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'contactform',
        component: _app_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__["ContactFormComponent"]
    },
    {
        path: 'About',
        component: _app_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'right',
        component: _app_right_right_component__WEBPACK_IMPORTED_MODULE_3__["RightComponent"]
    },
    {
        path: 'left',
        component: _left_left_component__WEBPACK_IMPORTED_MODULE_4__["LeftComponent"]
    }
];


/***/ }),

/***/ "./src/app/ver-mov/ver-mov.component.css":
/*!***********************************************!*\
  !*** ./src/app/ver-mov/ver-mov.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n     \r\n    display: flex;\r\n    flex-direction: column;\r\n    /* padding: 5%; */\r\n    margin: 20px;\r\n    color: gray;\r\n    align-content: space-between;\r\n      }\r\n.example-card {\r\n        width: 200px;\r\n      }\r\n.columns\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 3px;\r\n    align-content: space-between;\r\n}\r\n.center {\r\n    text-align: justify;\r\n    width: 30vw;\r\n}"

/***/ }),

/***/ "./src/app/ver-mov/ver-mov.component.html":
/*!************************************************!*\
  !*** ./src/app/ver-mov/ver-mov.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n<div>\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>RecentComments</mat-card-title>\n  </mat-card-header>\n    <mat-card-content>\n      <div class=\"columns\">\n        <div *ngFor=\"let c of RecentComments\">\n         <p>\n            <i class=\"material-icons\">timeline</i>\n           {{c.name}}</p> \n        </div>\n        </div>\n  </mat-card-content>\n</mat-card>\n</div>\n<br>\n<br>\n\n<div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>RecentPost</mat-card-title>\n    </mat-card-header>\n      <mat-card-content>\n        <div class=\"columns\">\n          <div *ngFor=\"let c of RecentPost\">\n           <p>\n              <i class=\"material-icons\">tab</i>\n             {{c.name}}</p> \n          </div>\n          </div>\n    </mat-card-content>\n  </mat-card>\n  </div>\n<br>\n<br>\n\n  <div>\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <mat-card-title>Archives</mat-card-title>\n      </mat-card-header>\n        <mat-card-content>\n          <div class=\"columns\">\n            <div *ngFor=\"let c of Archives\">\n             <p>\n                <i class=\"material-icons\">view_list</i>\n               {{c.name}}</p> \n            </div>\n            </div>\n      </mat-card-content>\n    </mat-card>\n    </div>\n\n</div>\n\n\n \n  \n"

/***/ }),

/***/ "./src/app/ver-mov/ver-mov.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ver-mov/ver-mov.component.ts ***!
  \**********************************************/
/*! exports provided: VerMovComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerMovComponent", function() { return VerMovComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerMovComponent = /** @class */ (function () {
    function VerMovComponent() {
        this.RecentPost = [
            { 'name': ' The Land of The Vikings', 'url': '' },
            { 'name': 'Hello world!', 'url': '' },
            { 'name': ' The Key To A Quality', 'url': '' },
            { 'name': 'The Door In The Wall', 'url': '' },
            { 'name': ' Now Is The Time To Rebrand', 'url': '' }
        ];
        this.RecentComments = [
            { 'name': ' A WordPress Commenter on Hello world!', 'url': '' },
            { 'name': 'Maria on Woo Ninja', 'url': '' },
            { 'name': ' Maria on Premium Quality', 'url': '' },
            { 'name': 'Maria on Woo Logo', 'url': '' },
            { 'name': 'Maria on Ninja Silhouette', 'url': '' }
        ];
        this.Archives = [
            { 'name': 'October 2017', 'url': '' },
            { 'name': 'September 2017', 'url': '' },
            { 'name': 'April 2017', 'url': '' },
            { 'name': 'March 2017', 'url': '' },
            { 'name': 'February 2017', 'url': '' }
        ];
    }
    VerMovComponent.prototype.ngOnInit = function () {
    };
    VerMovComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ver-mov',
            template: __webpack_require__(/*! ./ver-mov.component.html */ "./src/app/ver-mov/ver-mov.component.html"),
            styles: [__webpack_require__(/*! ./ver-mov.component.css */ "./src/app/ver-mov/ver-mov.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VerMovComponent);
    return VerMovComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nvelmurugan\ggg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map