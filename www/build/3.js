webpackJsonp([3],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanosPageModule", function() { return PlanosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planos__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanosPageModule = /** @class */ (function () {
    function PlanosPageModule() {
    }
    PlanosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__planos__["a" /* PlanosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__planos__["a" /* PlanosPage */]),
            ],
        })
    ], PlanosPageModule);
    return PlanosPageModule;
}());

//# sourceMappingURL=planos.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlanosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanosPage = /** @class */ (function () {
    function PlanosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanosPage');
    };
    PlanosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-planos',template:/*ion-inline-start:"d:\YouCook\src\pages\planos\planos.html"*/'\n<ion-header>\n  <ion-navbar color="purples">\n\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Planos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>    \n    <ion-slides pager>\n\n      <ion-slide class="slide">\n          <figure>\n            <img class="imgplan" src="https://i.imgur.com/N2Pc9iF.jpg">\n          </figure>\n          \n        <h1 class="title">Plano Básico</h1>\n\n          <ion-card color="purples">\n              <ion-card-content text-left >\n               \n              <ul>\n                <li>Uma seleção incrível de pratos simples e deliciosos.</li>\n                <li>Porções para 2 pessoas</li>\n                <li>2 receitas básicas por semana</li>\n                <li>R$25,85 por semana</li>\n            </ul>\n\n              </ion-card-content>\n            </ion-card>\n\n            <div text-center>\n              <button ion-button large color="purples" clear >Assinar</button>\n            </div>\n\n      </ion-slide>\n    \n      <ion-slide class="slide">\n        <figure>\n          <img class="imgplan" src="https://i.imgur.com/oOkOElg.jpg?1">\n        </figure>\n        \n      <h1 class="title">Plano Premium</h1>\n\n        <ion-card color="purples">\n            <ion-card-content text-left >\n             \n            <ul>\n              <li>Receitas premium saborosas e exclusivas.</li>\n              <li>Porções para 2 pessoas</li>\n              <li>3 receitas premium por semana</li>\n              <li>R$38,97 por semana</li>\n          </ul>\n\n            </ion-card-content>\n          </ion-card>\n\n          <div text-center>\n            <button ion-button large color="purples" clear >Assinar</button>\n          </div>\n      </ion-slide>\n    \n      \n      <ion-slide class="slide">\n        <figure>\n          <img class="" src="https://i.imgur.com/RWcWsaG.jpg?1">\n        </figure>\n        \n      <h1 class="title">Plano Família</h1>\n\n        <ion-card color="purples">\n            <ion-card-content text-left >\n             \n            <ul>\n              <li>Nosso pacote completo, com todas as nossas receitas.</li>\n              <li>Porções para 4 pessoas</li>\n              <li>3 receitas básicas ou premium por semana</li>\n              <li>R$65,97 por semana</li>\n          </ul>\n\n            </ion-card-content>\n          </ion-card>\n\n          <div text-center>\n            <button ion-button large color="purples" clear >Assinar</button>\n          </div>\n      </ion-slide>\n    \n    </ion-slides>\n\n\n  </ion-content>'/*ion-inline-end:"d:\YouCook\src\pages\planos\planos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PlanosPage);
    return PlanosPage;
}());

//# sourceMappingURL=planos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map