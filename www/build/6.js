webpackJsonp([6],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BemvindoPageModule", function() { return BemvindoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bemvindo__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BemvindoPageModule = /** @class */ (function () {
    function BemvindoPageModule() {
    }
    BemvindoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bemvindo__["a" /* BemvindoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bemvindo__["a" /* BemvindoPage */]),
            ],
        })
    ], BemvindoPageModule);
    return BemvindoPageModule;
}());

//# sourceMappingURL=bemvindo.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BemvindoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
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
 * Generated class for the BemvindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BemvindoPage = /** @class */ (function () {
    function BemvindoPage(navCtrl, navParams, firebaseauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseauth = firebaseauth;
    }
    BemvindoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BemvindoPage');
        this.firebaseauth.auth.currentUser.uid;
    };
    BemvindoPage.prototype.planos = function () {
        this.navCtrl.setRoot("PlanosPage");
    };
    BemvindoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bemvindo',template:/*ion-inline-start:"d:\YouCook\src\pages\bemvindo\bemvindo.html"*/'\n<ion-header>\n  <ion-navbar color="purples">\n\n  <button ion-button menuToggle>\n    <ion-icon  name="menu"></ion-icon>\n  </button>\n  <ion-title>Bem-vindo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <figure text-center>\n    <img width="200" heigth="62" class="bgimg" src="https://i.imgur.com/xg6Mzd6.png">\n    </figure>\n    \n  <ion-avatar>\n      <img src="https://i.imgur.com/LY3hwOa.jpg">\n    </ion-avatar>\n      <ion-card color="purples">\n          <ion-card-content >\n              <ul>\n                  <li>Refeições exclusivas entregues semanalmente</li>\n                  <li>Receitas simples e rápidas</li>\n                  <li>Ingredientes frescos em quantidades exatas</li>\n                  <li>Entregas agendadas por você</li>\n              </ul>\n          </ion-card-content>\n        </ion-card>\n   <div text-center>\n    <button ion-button large color="purples" clear (click)="planos()">Escolha seu plano</button>\n  </div>\n  </ion-content>\n'/*ion-inline-end:"d:\YouCook\src\pages\bemvindo\bemvindo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], BemvindoPage);
    return BemvindoPage;
}());

//# sourceMappingURL=bemvindo.js.map

/***/ })

});
//# sourceMappingURL=6.js.map