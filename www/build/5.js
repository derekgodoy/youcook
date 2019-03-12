webpackJsonp([5],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, // exibe mensagem
        firebaseauth, // Autenticação Firebase
        storageService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        this.storageService = storageService;
    }
    HomePage.prototype.login = function () {
        var _this = this;
        this.firebaseauth.auth
            .signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            // login efetuado com sucesso
            _this.mensagem("Login efetuado com sucesso!");
        })
            .catch(function (erro) {
            // Login incorreto
            _this.mensagem("Login incorreto!");
        });
    };
    HomePage.prototype.cadastro = function () {
        var _this = this;
        this.firebaseauth.auth
            .createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            // login efetuado com sucesso
            _this.mensagem("Cadastrado com sucesso!");
        })
            .catch(function (erro) {
            // Login incorreto
            _this.mensagem("Cadastro incorreto!");
        });
    };
    // Configura objeto de mensagem
    HomePage.prototype.mensagem = function (texto) {
        var msg = this.toastCtrl.create({
            duration: 1000,
            position: 'botton'
        });
        msg.setMessage(texto);
        msg.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('usuario'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"d:\YouCook\src\pages\home\home.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding class="bgmassa">\n  <ion-scroll scrollbar-x="false" scrollbar-y="false" > </ion-scroll>\n  <figure text-center>\n      <ion-img width="250" height="250" class="bgimg" src="https://i.imgur.com/haLYGv1.png"></ion-img>\n      </figure>\n\n  <ion-list>\n    <ion-item margin-bottom class="bginput">\n      <ion-label>E-mail</ion-label>\n      <ion-input type="text"  #usuario></ion-input>\n    </ion-item>\n    <ion-item class="bginput">\n      <ion-label>Senha</ion-label>\n      <ion-input type="password" #senha></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="purples" margin-bottom margin-top (click)="login()">Entrar</button>\n  <button ion-button block outline color="purples" (click)="cadastro()">Criar conta</button>\n\n</ion-content>\n'/*ion-inline-end:"d:\YouCook\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map