(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"about\">\n    <div class=\"container\">\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">{{pageHeaders[0]}}</div>\n              {{aboutMe.introduction}}\n              <br>\n              {{aboutMe.bio}}\n              <br>\n              {{aboutMe.strengthStatement}}\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">{{pageHeaders[1]}}</div>\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">{{basicInfoHeaders[0]}}</strong>\n                </div>\n                <div class=\"col-sm-8\">{{aboutMe.dateOfBirth}}</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">{{basicInfoHeaders[1]}}</strong>\n                </div>\n                <div class=\"col-sm-8\">{{aboutMe.email}}</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">{{basicInfoHeaders[2]}}</strong>\n                </div>\n                <div class=\"col-sm-8\">{{aboutMe.location}}\n                </div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">{{basicInfoHeaders[3]}}</strong>\n                </div>\n                <div class=\"col-sm-8\">{{aboutMe.language}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"contact\">\n        <div class=\"cc-contact-information\" style=\"background-color: gray;\">\n          <div class=\"container\">\n            <div class=\"cc-contact\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"card mb-0\" data-aos=\"zoom-in\">\n                    <div class=\"h4 text-center title\">{{pageHeader}}</div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <form name=\"form\" (ngSubmit)=\"f.form.valid ; f.resetForm()\" #f=\"ngForm\" novalidate>\n                            <div class=\"p pb-3\">\n                              <strong>{{tableHeaders[0]}}</strong>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-user-circle\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                                    [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\n                                    [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                                    [(ngModel)]=\"model.message\" #message=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col\">\n                                <button class=\"btn btn-primary\" type=\"submit\">{{submitTitle}}</button>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <p class=\"mb-0\">\n                            <strong>{{tableHeaders[1]}}</strong>\n                          </p>\n                          <div *ngFor=\"let method of methodsOfCommunication\">\n                            {{method}}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-snotify class=\"material\"></ng-snotify>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"education\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">{{pageHeader}}</div>\n      <div *ngFor=\"let edu of education\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body cc-education-header\">\n                <p>{{edu.startDate}} - {{edu.endDate}}</p>\n                <div class=\"h5\">{{edu.degree}}</div>\n              </div>\n            </div>\n            <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body\">\n                <div class=\"h5\">{{edu.department}}</div>\n                <h4 class=\"category\">{{edu.university}}\n                </h4>\n                <ul>\n                  <div *ngFor=\"let note of edu.notes\">\n                    <li>{{note}}</li>\n                  </div>\n              </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"experience\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n        <div class=\"colorlib-narrow-content\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"timeline-centered\">\n                        <div *ngFor=\"let experience of experiences\">\n                            <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                                <div class=\"timeline-entry-inner\">\n                                    <div class=\"timeline-icon color-2\">\n                                        <i class=\"icon-pen2\"></i>\n                                    </div>\n                                    <div class=\"timeline-label\">\n                                        <h2>{{experience.jobTitle}}<span> {{experience.startDate}} to {{experience.endDate}}</span></h2>\n                                        <h4>{{experience.companyName}}</h4>\n                                        <p>{{experience.description}}</p>\n                                        <ul>\n                                        <div *ngFor=\"let skill of experience.skills\">\n                                            <li>{{skill}}</li>\n                                        </div>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </article>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container text-center\">\n      <a class=\"cc-twitter btn btn-link \" href=\"https://twitter.com/KriegeMadison\" target=\"_blank\">\n        <i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/madison-kriege\" target=\"_blank\">\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <div class=\"text-center text-muted\">\n      <p>&copy; All rights reserved.\n      </p>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"profile-page sidebar-collapse\">\n      <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n        <div class=\"container\">\n          <div class=\"navbar-translate\">\n            <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n              aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#about\">About</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link smooth-scroll\" href=\"#projects\">Projects</a>\n                  </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a>\n              </li>\n             \n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#education\">Education</a>\n              </li>\n\n              <!-- <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#reference\">Reference</a>\n                </li> -->\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\n    <div class=\"wrapper\">\n        <div class=\"page-header page-header-small\" filter-color=\"green\">\n            <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.JPG');\">\n            </div>\n            <div class=\"container\">\n                <div class=\"content-center\">\n                    <div class=\"cc-profile-image\">\n                        <a href=\"#\">\n                            <img src=\"assets/images/profile.jpg\" alt=\"Image\" />\n                        </a>\n                    </div>\n                    <div class=\"h2 title\">{{name}}</div>\n                    <p class=\"category text-white\">{{occupation}}</p>\n                </div>\n            </div>\n            <div class=\"section\">\n                <div class=\"container\">\n                    <div class=\"button-container\">\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/madisonkriege/\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Linkedin\">\n                            <i class=\"fa fa-linkedin\"></i>\n                        </a>\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/madison-kriege\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n                            <i class=\"fa fa-github\"></i>\n                        </a>\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://twitter.com/KriegeMadison\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"page-content\">\n    <app-intro></app-intro>\n    <app-about></app-about>\n    <app-experience></app-experience>\n    <app-projects></app-projects>\n    <app-skills></app-skills>\n    <app-education></app-education> \n    <!-- <app-reference></app-reference>  -->\n    <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"projects\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Projects</div>\n        <h3>This section is in progress. Stop back later to see my current projects!</h3>\n        <!-- <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        <div class=\"row\">\n\n            <ng-container *ngFor=\"let project of projects| paginate: config\">\n                <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n                    <div class=\"blog-entry\">\n                        <div class=\"card\">\n                            <img class=\"card-img-top\" src={{project.imgUrl}} onerror=\"this.src = 'assets/images/gif.gif'\" alt=\"Card image\" style=\"width:100%\">\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">{{project.title}}</h4>\n                                <h5 class=\"card-text\"><b>Technology :</b> {{project.tech}} </h5>\n                                <h5 class=\"card-text\"><a href={{project.mediumlink}}>Read Blog on this  Project</a></h5>\n\n                                <a href={{project.livedemo}} class=\"btn btn-primary stretched-link ml-2 mr-5\">Live Demo</a>\n                                <a href={{project.githurl}} class=\"btn btn-primary stretched-link\">GithubLink</a>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container> -->\n        <!-- </div> -->\n\n        <!-- <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls> -->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"reference\">\n        <div class=\"container cc-reference\">\n          <div class=\"h4 mb-4 text-center title\">{{pageHeader}}</div>\n          <div class=\"card\" data-aos=\"zoom-in\">\n            <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n                <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n              </ol>\n              <div class=\"carousel-inner\">\n                <div *ngFor=\"let ref of references; let i=index\">\n                  <div class=\"carousel-item active\" *ngIf=\"i ==0\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                        <div class=\"h5 pt-2\">{{ref.name}}</div>\n                        <p class=\"category\">{{ref.position}}</p>\n                        <p class=\"category\">{{ref.company}}</p>\n                      </div>\n                      <div class=\"col-lg-10 col-md-9\">\n                      <p>{{ref.reference}}</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"carousel-item\" *ngIf=\"i != 0\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/sg.jpg\" alt=\"Image\" />\n                      <div class=\"h5 pt-2\">{{ref.name}}</div>\n                      <p class=\"category\">{{ref.position}}</p>\n                      <p class=\"category\">{{ref.company}}</p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                    <p>{{ref.reference}}</p>\n                    </div>\n                  </div>\n                </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\" id=\"skill\">\n    <div class=\"container\">\n        <div class=\"h4 text-center mb-4 title\">Skills</div>\n        <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n            <div class=\"card-body\">\n                <div *ngFor=\"let skill of skills\">\n                    <div>\n                        <div class=\"progress-container progress-primary\">\n                            <span class=\"progress-badge\">{{skill.name}}</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"skill.progress\"\n                                aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                <span class=\"progress-value\">{{skill.progress}}%</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
const config = {
    useHash: true,
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config),
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRpc29ua3JpZWdlL0RvY3VtZW50cy9Qb3J0Zm9saW8vbWFkaXNvbi1rcmllZ2UuZ2l0aHViLmlvL3NyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgcHtcbiAgICBmb250LXdlaWdodDogNzAwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgXG59IiwiLnJvdyBwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.pageHeaders = ["About", "Basic Information"];
        this.basicInfoHeaders = ["Date of Birth", "Email", "Location", "Language"];
        this.aboutMe = {
            introduction: "Hi, I'm Madison Kriege!",
            bio: "Developer inspired to help others pursue their passions through software that is accessible and innovative—a long-term goal of assisting students in growing through STEM education and leadership opportunities.",
            strengthStatement: "Strengths: Restorative, Futuristic, Significance, Relator, and Responsibility",
            dateOfBirth: "July 07, 1998",
            email: "kriege.madison@gmail.com",
            location: "Iowa City, Iowa",
            language: "English"
        };
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");





let ContactComponent = class ContactComponent {
    constructor(profile, snotify) {
        this.profile = profile;
        this.snotify = snotify;
        this.pageHeader = "Contact Me";
        this.tableHeaders = ["Leave Me a Message", "Other Ways to Reach Me"];
        this.submitTitle = "Send";
        this.methodsOfCommunication = [
            "kriege.madison@gmail.com",
            "319-431-6239"
        ];
        this.snotifyConfig = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].snotifyConfig;
        this.model = {};
    }
    contact() {
        this.profile.contactus(this.model).subscribe(data => {
            if (data.status) {
                this.snotify.success(data.message, 'Success', this.snotifyConfig);
            }
            else {
                this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
            }
        }, err => {
            this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRpc29ua3JpZWdlL0RvY3VtZW50cy9Qb3J0Zm9saW8vbWFkaXNvbi1rcmllZ2UuZ2l0aHViLmlvL3NyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFBO0VBQ0osZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGg0e1xuICAgIGNvbG9yOiM0YTQ4NDM7XG5mb250LXNpemU6IDIwcHg7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xubWFyZ2luLXRvcDoycHg7XG59IiwiaDQge1xuICBjb2xvcjogIzRhNDg0MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() {
        this.pageHeader = "Education";
        this.education = [
            {
                startDate: "2012",
                endDate: "2016",
                degree: "High School",
                university: "Linn-Mar High School",
                department: "High School"
            },
            {
                startDate: "2016",
                endDate: "2020",
                degree: "Bachelor's Degree",
                university: "Iowa State University",
                department: "College of Engineering",
                notes: ["Major: Computer Engineering", "Emphasis: Software Engineering"]
            },
            {
                startDate: "2020",
                endDate: "Present",
                degree: "Master's Degree",
                university: "Texas Tech University",
                department: "Edward E. Whitacre Jr. College of Engineering",
                notes: ["Major: Software Engineering"]
            }
        ];
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRpc29ua3JpZWdlL0RvY3VtZW50cy9Qb3J0Zm9saW8vbWFkaXNvbi1rcmllZ2UuZ2l0aHViLmlvL3NyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBRUk7SUFFSSxnQkFBQTtJQUNBLG1CQUFBO0VDRlY7QUFDRjs7QURNSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURNTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDSFI7O0FES007RUFDRSxXQUFBO0FDRlI7O0FESU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREdNO0VBQ0UsV0FBQTtBQ0FSOztBREVNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURDTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRVI7O0FEQU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR1I7O0FERE07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0lSOztBREhRO0VBQ0UsV0FBQTtBQ01WOztBRExRO0VBQ0UsbUJBQUE7QUNRVjs7QURQUTtFQUNFLG1CQUFBO0FDVVY7O0FEVFE7RUFDRSxtQkFBQTtBQ1lWOztBRFhRO0VBQ0UsbUJBQUE7QUNjVjs7QURiUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2dCVjs7QURkTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNpQlI7O0FEZk07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDa0JSOztBRGhCTTtFQUNFLGdCQUFBO0FDbUJSOztBRGpCTTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FDb0JSOztBRGxCTTtFQUNFLFdBQUE7QUNxQlI7O0FEbkJNO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3NCUjs7QURsQk07RUFFRSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUFlLGdCQUFBO0FDcUJ2Qjs7QURqQk07RUFFQyxXQUFBO0VBQVksZ0JBQUE7QUNvQm5COztBRGpCTTtFQUVFLGdCQUFBO0VBQWlCLGdCQUFBO0FDb0J6Qjs7QURsQk07RUFDRSxnQkFBQTtFQUFpQixnQkFBQTtFQUFpQiwyQ0FBQTtBQ3VCMUMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcmxpYi1leHBlcmllbmNlXG57XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOWVtO1xuICBcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpXG4gICAge1xuICAgICAgICAuY29sb3JsaWItZXhwZXJpZW5jZVxuICAgICAgICB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjbGVhcjogYm90aDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI5cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmM5OGYwO1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYzU0NTM7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5YmYzZjsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTg0Y2I4OyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZmE0OTk7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICAgICAgICBjb2xvcjogIzAwMDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gICAgICAgIC13ZWJraXQtb3BhY2l0eTogLjQ7XG4gICAgICAgIC1tb3otb3BhY2l0eTogLjQ7XG4gICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtbGFiZWwgaDR7XG4gICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjNTQ1NzU1O2ZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIFxuICAgICAgXG4gICAgICB9XG4gICAgICAudGltZWxpbmUtbGFiZWwgc3BhbntcbiAgICAgIFxuICAgICAgIGNvbG9yOiAjMDAwO2ZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1sYWJlbCBwe1xuICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07Zm9udC13ZWlnaHQ6NTAwO1xuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHVse1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO2ZvbnQtd2VpZ2h0OjUwMDsgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgfSIsIi5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgfVxufVxuLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgdG9wOiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzJjOThmMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0yIHtcbiAgYmFja2dyb3VuZDogI2VjNTQ1Mztcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gIGJhY2tncm91bmQ6ICNmOWJmM2Y7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTQge1xuICBiYWNrZ3JvdW5kOiAjYTg0Y2I4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci01IHtcbiAgYmFja2dyb3VuZDogIzJmYTQ5OTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogMC40O1xuICAtbW96LW9wYWNpdHk6IDAuNDtcbiAgb3BhY2l0eTogMC40O1xuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZWxpbmUtbGFiZWwgaDQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU0NTc1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgdWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() {
        this.experiences = [
            {
                jobTitle: "Software Developer",
                companyName: "Pearson",
                startDate: "Jul 2017",
                endDate: "Present",
                description: "Developing multiple web-based systems used for assessment management and administration",
                skills: ["Angular", "Java", "Postgres"]
            },
            {
                jobTitle: "Software Development Intern",
                companyName: "Buildertrend",
                startDate: "May 2019",
                endDate: "August 2019",
                description: "Converted a forms-based web application to ReactJS for a construction software management company",
                skills: ["ReactJS", "Java"]
            }
        ];
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroComponent = class IntroComponent {
    constructor() {
        this.name = "Madison Kriege";
        this.occupation = "Software Developer";
    }
};
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")).default]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let ProfileComponent = class ProfileComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 2000);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reference/reference.component */ "./src/app/profile/reference/reference.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/profile/projects/projects.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");


















let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"],
            _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"]
        ],
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
            _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__["ReferenceComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"]
        ],
        providers: [
            { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"] },
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.skillsData = [
            {
                'id': '1',
                'skill': 'ANGULAR 6',
                'progress': '85%'
            },
            {
                'id': '2',
                'skill': 'PHP\/CODEIGNITER',
                'progress': '80%'
            },
            {
                'id': '3',
                'skill': 'C++',
                'progress': '80%'
            },
            {
                'id': '4',
                'skill': 'PYTHON',
                'progress': '75%'
            },
            {
                'id': '5',
                'skill': 'ADOBE ILLUSTRATOR',
                'progress': '75%'
            },
            {
                'id': '6',
                'skill': 'DATA STRUCTURE',
                'progress': '70%'
            }
        ];
        this.educationData = [
            {
                'id': '1',
                'from_to_year': '2016 - 2020',
                'education': 'Bachelor\'s Degree',
                'stream': 'Bachelor of Engineering',
                'institution': 'MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR'
            },
            {
                'id': '2',
                'from_to_year': '2014 - 2015',
                'education': 'Higher Secondary',
                'stream': 'Science and Mathematics',
                'institution': 'GOVT. BOYS H.S. SCHOOL, DHAMNOD, DHAR'
            },
            {
                'id': '3',
                'from_to_year': '2012 - 2013',
                'education': 'High School',
                'stream': 'Science and Mathematics',
                'institution': 'SARSWATI SHISHU VIDHYA MANDIR, DHAMNOD, DHAR'
            }
        ];
        this.exprienceData = [
            {
                'id': '1',
                'from_to_month_year': 'JUNE 2018 - AUGUST 2018',
                'organization': 'WITTYFEED',
                'designation': 'Full Stack Developer',
                'details': `Created fully functional projects for <strong>WittyFeed<\/strong>,
      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).
      <\/strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.
      Another project was Influencer admin Dashboard which has features like app approval,
      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.
      Lastly the admin dashboard for managing publishers for OneFeed.`
            },
            {
                'id': '2',
                'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
                'organization': 'MITS, GWALIOR',
                'designation': 'Web Developer',
                'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
            },
            {
                'id': '3',
                'from_to_month_year': 'AUGUST 2017 - SEPTEMBER 2017',
                'organization': 'QUERENCIA CLUB (MITS)',
                'designation': 'Web Developer',
                'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
            }
        ];
    }
    contactus(data) {
        return this.http.post(this.baseUrl + 'contact', data);
    }
    skills() {
        // return this.http.get(this.baseUrl + 'skills');
        return this.skillsData;
    }
    education() {
        // return this.http.get(this.baseUrl + 'education');
        return this.educationData;
    }
    exprience() {
        // return this.http.get(this.baseUrl + 'exprience');
        return this.exprienceData;
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/profile/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 18px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.2em;\n  color: black;\n}\n\n@media screen and (min-width: 992px) {\n  .card-img-top {\n    height: 196px;\n  }\n\n  .blog-entry h4 {\n    min-height: 52px;\n  }\n\n  .blog-entry h5 {\n    min-height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRpc29ua3JpZWdlL0RvY3VtZW50cy9Qb3J0Zm9saW8vbWFkaXNvbi1rcmllZ2UuZ2l0aHViLmlvL3NyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxrQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUtBLG1CQUFBO0VBR0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUtJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSTtJQUNJLGFBQUE7RUNBTjs7RURFRTtJQUNJLGdCQUFBO0VDQ047O0VEQ0U7SUFDSSxnQkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctZW50cnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ibG9nLWVudHJ5IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgIH1cbn1cblxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4gc21hbGwgaSB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgICBmb250LXdlaWdodDogNTYwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogYmxhY2tcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY2FyZC1pbWctdG9wIHtcbiAgICAgICAgaGVpZ2h0OiAxOTZweDtcbiAgICB9XG4gICAgLmJsb2ctZW50cnkgaDQge1xuICAgICAgICBtaW4taGVpZ2h0OiA1MnB4O1xuICAgIH1cbiAgICAuYmxvZy1lbnRyeSBoNSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgfVxufSIsIi5ibG9nLWVudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9nLWVudHJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIH1cbn1cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmxvZy1lbnRyeSAuYmxvZy1pbWcgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4gc21hbGwgaSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyAubGVhZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5ibG9nLWVudHJ5OmhvdmVyIC5ibG9nLWltZyBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYmxvZy1lbnRyeSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA1NjA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmxvZy1lbnRyeSBoNSB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQtaW1nLXRvcCB7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgfVxuXG4gIC5ibG9nLWVudHJ5IGg0IHtcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xuICB9XG5cbiAgLmJsb2ctZW50cnkgaDUge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: 'Read data from Google spreadsheet in Angular',
                desc: '',
                livedemo: 'https://mehulk05.github.io/MyShop/#/',
                githurl: 'https://github.com/mehulk05/MyShop',
                mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
                imgUrl: 'assets/images/z1.png',
                tech: 'Angular 10 , Google SpreadsheetApi'
            },
            {
                id: 2,
                title: 'Blog App Using MERN Stack',
                desc: '',
                livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
                githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
                mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
                imgUrl: 'assets/images/z26.png',
                tech: 'React, Node, MongoDB, Express'
            },
            {
                id: 3,
                title: 'CRUD operation using MEAN stack',
                desc: '',
                livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
                githurl: 'https://github.com/mehulk05/Blog-using-mean',
                mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
                imgUrl: 'assets/images/z27.png',
                tech: 'Angular 10, Node, MongoDB, Express'
            },
            {
                id: 4,
                title: 'Multiroom Chat Application in Node JS',
                desc: '',
                livedemo: 'https://chatapp-using-node.herokuapp.com/',
                githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
                mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
                imgUrl: 'assets/images/z23.png',
                tech: 'Node JS,Socket IO'
            },
            {
                id: 5,
                title: 'Integrate Medium Blogs on your React App',
                desc: '',
                livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
                githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
                mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
                imgUrl: 'assets/images/z4.png',
                tech: 'React JS'
            },
            {
                id: 6,
                title: 'News App using ReactJS (Parsing XML to JSON)',
                desc: '',
                livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
                githurl: 'https://github.com/mehulk05/NewsApp-using-React',
                mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
                imgUrl: 'assets/images/z24.png',
                tech: 'React JS, XMl to JSON'
            },
            {
                id: 7,
                title: 'Medium-Like Blog App Using Angular 9 and Firebase',
                desc: '',
                livedemo: 'https://mehulk05.github.io/Blog-Book/',
                githurl: 'https://github.com/mehulk05/Blog-Book',
                mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
                imgUrl: 'assets/images/z21.png',
                tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
            },
            {
                id: 8,
                title: 'COVID 19 Tracker (Statistics) app Using Angularr',
                desc: '',
                livedemo: 'https://mehulk05.github.io/COVOID-19/',
                githurl: 'https://github.com/mehulk05/COVOID-19',
                mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
                imgUrl: 'assets/images/z2.png',
                tech: 'Angular 10 ,Bootstrap,Javascript'
            },
            {
                id: 9,
                title: 'Weather App with React',
                desc: '',
                livedemo: 'https://mehulk05.github.io/React-Weather/',
                githurl: 'https://github.com/mehulk05/React-Weather-App',
                mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
                imgUrl: 'assets/images/z9.png',
                tech: 'React, Open MAp Api'
            },
            {
                id: 10,
                title: 'Spring Boot + Angular 8 CRUD Example',
                desc: '',
                livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
                githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
                mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
                imgUrl: 'assets/images/z28.png',
                tech: 'Angular8, Java ,Hibernate'
            },
            {
                id: 11,
                title: 'Personal Portfolio Using Angular',
                desc: '',
                livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
                githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
                mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
                imgUrl: 'assets/images/z11.png',
                tech: 'Angular ,Bootstrap'
            },
            {
                id: 12,
                title: 'Personal Portfolio Using Django',
                desc: '',
                livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
                githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
                mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
                imgUrl: 'assets/images/z12.png',
                tech: 'Django'
            },
            {
                id: 13,
                title: 'Movie Success Prediction',
                desc: '',
                livedemo: 'https://mehulkothari05.medium.com/',
                githurl: 'https://github.com/mehulk05',
                mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
                imgUrl: 'assets/images/z13.png',
                tech: 'Python, Machine Learning, Django Framework.'
            },
            {
                id: 14,
                title: 'Matrimonial Website',
                desc: '',
                livedemo: 'https://mehulkothari05.medium.com/',
                githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
                mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
                imgUrl: 'assets/images/z14.png',
                tech: 'HTML, CSS, Bootstrap, Jquery'
            },
        ];
    }
    ngOnInit() {
        this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: this.projects.length
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/profile/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/profile/reference/reference.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cc-reference p {\n  font-weight: 1000px;\n  color: black;\n  font-style: bold;\n}\n\n.category p {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRpc29ua3JpZWdlL0RvY3VtZW50cy9Qb3J0Zm9saW8vbWFkaXNvbi1rcmllZ2UuZ2l0aHViLmlvL3NyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0ksVUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNjLXJlZmVyZW5jZSBwe1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIH1cblxuICAuY2F0ZWdvcnkgcHtcbiAgICAgIHdpZHRoOiAxMCVcbiAgfSIsIi5jYy1yZWZlcmVuY2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLmNhdGVnb3J5IHAge1xuICB3aWR0aDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/reference/reference.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/reference/reference.component.ts ***!
  \**********************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReferenceComponent = class ReferenceComponent {
    constructor() {
        this.pageHeader = "References";
        this.references = [
            {
                name: "Name",
                position: "Position",
                company: "Company",
                reference: "Text"
            },
            {
                name: "Name",
                position: "Position",
                company: "Company",
                reference: "Text"
            }
        ];
    }
};
ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reference',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reference.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reference.component.scss */ "./src/app/profile/reference/reference.component.scss")).default]
    })
], ReferenceComponent);



/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() {
        this.skills = [
            {
                name: "Angular",
                progress: 80
            },
            {
                name: "React",
                progress: 60
            },
            {
                name: "Java",
                progress: 70
            },
            {
                name: "Postgres",
                progress: 45
            }
        ];
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")).default]
    })
], SkillsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "https://madison-kriege.github.io",
    snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop,
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/madisonkriege/Documents/Portfolio/madison-kriege.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map