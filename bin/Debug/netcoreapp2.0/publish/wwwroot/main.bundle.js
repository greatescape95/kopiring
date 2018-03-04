webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_jumboprint_jumboprint_component__ = __webpack_require__("../../../../../src/app/components/jumboprint/jumboprint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_3__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'jumboprint', component: __WEBPACK_IMPORTED_MODULE_4__components_jumboprint_jumboprint_component__["a" /* JumboprintComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_5__components_gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_1__heroes_heroes_component__["a" /* HeroesComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_0__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"main\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollup').fadeIn();
            }
            else {
                jQuery('.scrollup').fadeOut();
            }
        });
        jQuery('.scrollup').click(function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        /*----------------------------------------------------*/
        /*	Parallax section
        /*----------------------------------------------------*/
        jQuery('.recentworks').parallax("50%", 0.1);
        jQuery('.product-lead').parallax("50%", 0.1);
        jQuery('.our-clients').parallax("50%", 0.1);
        jQuery('.service-reasons').parallax("50%", 0.1);
        jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({ overlay_gallery: false });
        /*Mobile device topnav opener*/
        jQuery(".down-button").click(function () {
            jQuery(".down-button .icon-current").toggleClass("fa fa-angle-up fa fa-angle-down");
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_content_main_content_main_component__ = __webpack_require__("../../../../../src/app/components/content-main/content-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_content_product_content_product_component__ = __webpack_require__("../../../../../src/app/components/content-product/content-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_references_references_component__ = __webpack_require__("../../../../../src/app/components/references/references.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_features_features_component__ = __webpack_require__("../../../../../src/app/components/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_latest_posts_latest_posts_component__ = __webpack_require__("../../../../../src/app/components/latest-posts/latest-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_clients_clients_component__ = __webpack_require__("../../../../../src/app/components/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_style_switcher_style_switcher_component__ = __webpack_require__("../../../../../src/app/components/style-switcher/style-switcher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_slogan_slogan_component__ = __webpack_require__("../../../../../src/app/components/slogan/slogan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_banner_banner_component__ = __webpack_require__("../../../../../src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_jumboprint_jumboprint_component__ = __webpack_require__("../../../../../src/app/components/jumboprint/jumboprint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_contact_show_errors_show_errors_component__ = __webpack_require__("../../../../../src/app/components/contact/show-errors/show-errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_picture_picture_component__ = __webpack_require__("../../../../../src/app/components/picture/picture.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_slogan_slogan_component__["a" /* SloganComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_content_main_content_main_component__["a" /* ContentMainComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_content_product_content_product_component__["a" /* ContentProductComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_references_references_component__["a" /* ReferencesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_latest_posts_latest_posts_component__["a" /* LatestPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_style_switcher_style_switcher_component__["a" /* StyleSwitcherComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_jumboprint_jumboprint_component__["a" /* JumboprintComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_contact_show_errors_show_errors_component__["a" /* ShowErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_picture_picture_component__["a" /* PictureComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_12__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__services_menu_service__["a" /* MenuService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods



var AppService = (function () {
    // Resolve HTTP using the constructor
    function AppService(_http) {
        this._http = _http;
        this.greetUrl = 'api/Hello/Greetings';
        this.sendContactDataUrl = 'api/ContactForm/SendContactData';
    }
    AppService.prototype.sayHello = function () {
        return this._http.get(this.greetUrl).map(function (response) {
            return response.text();
        });
    };
    AppService.prototype.sendContactData = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(data);
        return this._http.post(this.sendContactDataUrl, body, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* tap */])(function () { return console.log("uspjelo"); }));
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fullwidthbanner-container banner-collapse\">\n    <div class=\"fullwidthbanner rslider\">\n        <ul>\n            <!-- THE FIRST SLIDE -->\n            <li data-transition=\"fade\" data-slotamount=\"7\" data-masterspeed=\"500\"  data-saveperformance=\"on\">\n                <img src=\"assets/img/header2.jpg\"  alt=\"Pixma\" data-lazyload=\"assets/img/header2.jpg\" data-bgposition=\"center top\" data-bgfit=\"cover\" data-bgrepeat=\"no-repeat\">\n\n                <div class=\"caption modern_big_bluebg h1 lft tp-caption start\"\n                     data-x=\"40\"\n                     data-y=\"85\"\n                     data-speed=\"700\"\n                     data-endspeed=\"800\"\n                     data-start=\"1000\"\n                     data-easing=\"easeOutQuint\"\n                     data-endeasing=\"easeOutQuint\">\n                    <h3>PLOTANJE I UVEZIVANJE PROJEKATA</h3>\n                </div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"1400\"\n                     data-speed=\"1050\"\n                     data-y=\"180\"\n                     data-x=\"40\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-print fa-2x\"></i>\n                        <h4> Plotanje </h4>\n                    </div>\n                </div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"1800\"\n                     data-speed=\"1200\"\n                     data-y=\"240\"\n                     data-x=\"40\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-files-o fa-2x\"></i>\n                        <h4> Fotokopiranje </h4>\n                    </div>\n                </div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"2200\"\n                     data-speed=\"1350\"\n                     data-y=\"300\"\n                     data-x=\"40\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-book fa-2x\"></i>\n                        <h4> Uvezivanje </h4>\n                    </div>\n                </div>\n            </li>\n            <!-- THE FIRST SLIDE -->\n            <li data-transition=\"fade\" data-slotamount=\"7\" data-masterspeed=\"500\"  data-saveperformance=\"on\">\n                <img src=\"assets/img/header5.jpg\"  alt=\"Pixma\" data-lazyload=\"assets/img/header5.jpg\" data-bgposition=\"center top\" data-bgfit=\"cover\" data-bgrepeat=\"no-repeat\">\n                <div class=\"caption large_text sft\"\n                     data-x=\"460\"\n                     data-y=\"54\"\n                     data-speed=\"300\"\n                     data-start=\"800\"\n                     data-easing=\"easeOutExpo\"  >ZLATOTISAK</div>\n                <div class=\"caption large_text sft\"\n                     data-x=\"489\"\n                     data-y=\"92\"\n                     data-speed=\"300\"\n                     data-start=\"1100\"\n                     data-easing=\"easeOutExpo\"  >I</div>\n                <div class=\"caption large_text sfr\"\n                     data-x=\"538\"\n                     data-y=\"92\"\n                     data-speed=\"300\"\n                     data-start=\"1100\"\n                     data-easing=\"easeOutExpo\"  ><span>REKLAME</span></div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"1400\"\n                     data-speed=\"1050\"\n                     data-y=\"180\"\n                     data-x=\"460\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-check slide-icon\"></i>\n                        <h5> Profesionalno </h5>\n                    </div>\n                </div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"1800\"\n                     data-speed=\"1200\"\n                     data-y=\"220\"\n                     data-x=\"460\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-check slide-icon\"></i>\n                        <h5> Povoljno </h5>\n                    </div>\n                </div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"2200\"\n                     data-speed=\"1350\"\n                     data-y=\"260\"\n                     data-x=\"460\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-check slide-icon\"></i>\n                        <h5> Veliki formati </h5>\n                    </div>\n                </div>\n                <div class=\"caption list_slide lfb tp-caption start\"\n                     data-easing=\"easeOutExpo\"\n                     data-start=\"2600\"\n                     data-speed=\"1350\"\n                     data-y=\"300\"\n                     data-x=\"460\">\n                    <div class=\"list-slide\">\n                        <i class=\"fa fa-check slide-icon\"></i>\n                        <h5> Ispis u visokoj kvaliteti </h5>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
        this.handleJQuery = function () {
            $('.fullwidthbanner').show().revolution({
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 470,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "square",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
                keyboardNavigation: "off",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 0,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 0,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "on",
                fullScreen: "off",
                spinner: "spinner4",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "off",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                videoJsPath: "js/revolution-slider/videojs/",
                fullScreenOffsetContainer: ""
            });
        };
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.handleJQuery();
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Our Clients Start-->\n<div class=\"our-clients\">\n    <div class=\"bg-overlay\">\n         <div class=\"container\">\n            <div class=\"row\">\n               <div class=\"client\">\n                  <div class=\"client-logo\">\n                     <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"clients-title\">\n                           <h3 class=\"title\">Naši klijenti</h3>\n                           <div class=\"carousel-controls pull-right\">\n                              <a class=\"prev\" href=\"#client-carousel\" data-slide=\"prev\"><i class=\"fa fa-angle-left\"></i></a>\n                              <a class=\"next\" href=\"#client-carousel\" data-slide=\"next\"><i class=\"fa fa-angle-right\"></i></a>\n                              <div class=\"clearfix\"></div>\n                           </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"row\">\n                           <div id=\"client-carousel\" class=\"client-carousel carousel slide\">\n                              <div class=\"carousel-inner\">\n                                 <div class=\"item active padding-top-50px\">\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item animate_afc d1\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/fakultet.png\"></a></div>\n                                    </div>\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item animate_afc d2\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/geoprojekt.png\"></a></div>\n                                    </div>\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item animate_afc d3\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/pomgrad.png\"></a></div>\n                                    </div>\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item animate_afc d4\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/dalkoning.png\"></a></div>\n                                    </div>\n                                 </div>\n                                 <div class=\"item padding-top-50px\">\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/strabag.png\"></a></div>\n                                    </div>\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/kuzmanic.jpg\"></a></div>\n                                    </div>\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/neir.png\"></a></div>\n                                    </div>\n                                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6 item\">\n                                       <div class=\"item-inner\"><a href=\"#\"><img alt=\"Upportdash\" src=\"assets/img/clientslogo/projektnibiro.jpg\"></a></div>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n\n                  </div>\n               </div>\n            </div>\n         </div>\n    </div>\n  </div>\n  <!-- Our Clients End -->  \n"

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("../../../../../src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Main Content start-->\n  <div class=\"content\">\n      <div class=\"container\">\n         <div class=\"row\">\n            <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-12\" id=\"contact-form\" *ngIf=\"!isSubmitMessageVisible\">\n               <h3 class=\"title\">Pošaljite nam e-mail</h3>\n               <p>\n                  Javite nam se sa zahtjevom za našim uslugama i odgovorit ćemo vam u što skorijem roku.\n               </p>\n               <div class=\"divider\"></div>\n               <form #contact=\"ngForm\" (ngSubmit)=\"sendMail(contact)\" class=\"reply\" novalidate>\n                  <fieldset>\n                     <div class=\"row\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                           <label>Ime: <span>*</span></label>\n                           <input class=\"form-control\" [(ngModel)]=\"contactForm.name\" #name=\"ngModel\" id=\"name\" name=\"name\" type=\"text\" required>\n                           <app-show-errors [control]=\"name\"></app-show-errors>\n                        </div>\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                           <label>E-mail:</label>\n                           <input class=\"form-control\" [(ngModel)]=\"contactForm.email\" #email=\"ngModel\" type=\"email\" id=\"email\" name=\"email\">\n                           <app-show-errors [control]=\"email\"></app-show-errors>\n                        </div>\n                     </div>\n                     <div class=\"row\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                           <label>Telefon: <span>*</span></label>\n                           <input class=\"form-control\" [(ngModel)]=\"contactForm.phone\" #phone=\"ngModel\" id=\"subject\" name=\"subject\" type=\"text\" required>\n                           <app-show-errors [control]=\"phone\"></app-show-errors>\n                          </div>\n                     </div>\n                     <div class=\"row\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                           <label>Poruka: <span>*</span></label>\n                           <textarea class=\"form-control\" [(ngModel)]=\"contactForm.message\" #message=\"ngModel\" type=\"text\" id=\"text\" name=\"text\" rows=\"3\" cols=\"40\" required></textarea>\n                           <app-show-errors [control]=\"message\"></app-show-errors>\n                          </div>\n                     </div>\n                     <div class=\"row\" [hidden]=\"true\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                           <label>Test: <span>*</span></label>\n                           <input class=\"form-control\" [(ngModel)]=\"contactForm.spamFilter\" id=\"subject\" name=\"subject\" type=\"text\">\n                          </div>\n                     </div>\n                  </fieldset>\n                  <button class=\"btn btn-normal btn-color submit  bottom-pad\" type=\"submit\" [disabled]=\"contact.invalid\">Pošalji</button>\n                  <div class=\"clearfix\">\n                  </div>\n               </form>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-6 col-xs-12\" id=\"contact-form\" *ngIf=\"isSubmitMessageVisible\">\n                <p>Vaša poruka je uspješno poslana.</p>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-xs-12 col-sm-6\">\n               <div class=\"address widget\">\n                  <h3 class=\"title\">Kopiring</h3>\n                  <ul class=\"contact-us\">\n                     <li>\n                        <i class=\"fa fa-map-marker\"></i>\n                        <p>\n                           <strong class=\"contact-pad\">Adresa:</strong> Sukoišanska 43<br>\n                        21000 Split\n                        </p>\n                     </li>\n                     <li>\n                        <i class=\"fa fa-phone\"></i>\n                        <p>\n                           <strong>Telefon:</strong> 021 484 833\n                        </p>\n                     </li>\n                     <li>\n                        <i class=\"fa fa-envelope\"></i>\n                        <p>\n                           <strong>E-mail:</strong><a href=\"mailto:kopiring.split@st.t-com.hr\">kopiring.split@st.t-com.hr</a>\n                        </p>\n                     </li>\n                  </ul>\n               </div>\n               <div class=\"contact-info widget\">\n                  <h3 class=\"title\">Radno vrijeme</h3>\n                  <ul class=\"business-hour\">\n                     <li><i class=\"fa fa-clock-o\"> </i>Ponedjeljak - Petak - 7:00 do 14:00 i 17:00 do 18:00 </li>\n                     <li><i class=\"fa fa-clock-o\"> </i>Subota - 8:00 do 11:00</li>\n                     <li><i class=\"fa fa-times-circle-o\"> </i>Nedjelja - Zatvoreno</li>\n                  </ul>\n               </div>\n               <div class=\"follow widget\">\n                  <h3 class=\"title\">Pratite nas</h3>\n                  <div class=\"member-social dark\">\n                     <a class=\"facebook\" href=\"http://www.facebook.com/kopiring\"><i class=\"fa fa-facebook\"></i></a>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <div class=\"divider\"></div>\n      </div>\n   </div>\n   <!-- Main Content end-->\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__ = __webpack_require__("../../../../../src/app/enumerations/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(menuService, _appService) {
        var _this = this;
        this.menuService = menuService;
        this._appService = _appService;
        this.contactForm = {
            name: null,
            phone: null,
            email: null,
            message: null,
            spamFilter: null
        };
        this.sendMail = function (form) {
            if (_this.contactForm.spamFilter == null) {
                _this._appService.sendContactData(_this.contactForm)
                    .subscribe(function (result) {
                    _this.isSubmitMessageVisible = true;
                });
            }
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.menuService.setSelectedMenuItem(__WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__["a" /* MenuItem */].Contact);
        this.isSubmitMessageVisible = false;
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* AppService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/show-errors/show-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowErrorsComponent = (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    };
    ShowErrorsComponent.errorMessages = {
        'required': function () { return 'Ovo polje je obavezno.'; },
        'minlength': function (params) { return 'The min number of characters is ' + params.requiredLength; },
        'maxlength': function (params) { return 'The max allowed number of characters is ' + params.requiredLength; },
        'pattern': function (params) { return 'The required pattern is: ' + params.requiredPattern; },
        'years': function (params) { return params.message; },
        'countryCity': function (params) { return params.message; },
        'uniqueName': function (params) { return params.message; },
        'telephoneNumbers': function (params) { return params.message; },
        'telephoneNumber': function (params) { return params.message; }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show-errors',
            template: "\n   <div *ngIf=\"shouldShowErrors()\">\n     <p style=\"color: red\" *ngFor=\"let error of listOfErrors()\">{{ error }}</p>\n   </div>\n ",
        })
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
    var ShowErrorsComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/content-main/content-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/content-main/content-main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Content start-->\n<div class=\"main-content\">\n  <div class=\"container margin-bottom-50px\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"content-box big ch-item bottom-pad-small\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-print\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-print\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h3>Plotanje</h3>\n            <p>\n              Plotanje nacrta c/b ili u boji, plotanje nacrta u boji na hamer papir, plotanje nacrta u boji\n              na foto papir, plotanje nacrta u boji na paus papir, plotanje nacrta c/b na paus papir, plotanje nacrta u boji\n              na paus papir. Formatiranje nacrta na A4 i A3 format su uključeni u cijenu.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"content-box big ch-item bottom-pad-small\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-files-o\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-files-o\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h3>Fotokopiranje</h3>\n            <p>\n              Fotokopiranje u A4 formatu c/b. \n              Fotokopiranje u A4 formatu u boji. \n              Fotokopiranje u A3 formatu c/b ili u boji.\n              Mogućnost fotokopiranja knjiga, skripti, projekata, nacrta, kataloga, osobnih dokumenata, itd.\n              Jednostrano ili obostrano fotokopiranje.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"content-box big ch-item\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-picture-o\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-picture-o\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h3>Plastificiranje i kaširanje</h3>\n            <p>\n              Pružamo kvalitetnu izradu plastificiranih promotivnih i drugih materijala u formatima po izboru. u sjajnoj ili mat izvedbi plastifikacije. \n              Kaširanje (ljepljenja na čvrstu ravnu podlogu) fotografija, postera, umjetničkih slika u raznim formatima.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"content-box big ch-item bottom-pad-small\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-file-image-o\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-file-image-o\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h3>Skeniranje</h3>\n            <p>\n              Skeniranje nacrta c/b (do širine 914 mm PDF, TIFF, JPG format). \n              Skeniranje nacrta u boji (do širine 914 mm PDF, TIFF, JPG format).\n              Skeniranje A4,A3 c/b i u boji (PDF, TIFF, JPG).\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"content-box big ch-item bottom-pad-small\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-book\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-book\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h3>Uvezivanje</h3>\n            <p>\n              Izrada PVC fascikli, mapa za projekte, registratora, spiralnih uveza raznih demnzija, termo uveza raznih dimenzija. \n              Uvezivanje knjiga, knjižica, kataloga i promotivnih materijala.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"content-box big ch-item\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-edit\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-edit\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h3>Zlatotisak</h3>\n            <p>\n              Usluga zlatnog ispisa na različite vrste korica (diplomski, magistarski, doktorski radovi...) \n              Ispis na planere, dnevnike, korice knjiga, foto albume, čestitke, poklone i sl.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Main Content end-->"

/***/ }),

/***/ "../../../../../src/app/components/content-main/content-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentMainComponent = (function () {
    function ContentMainComponent() {
    }
    ContentMainComponent.prototype.ngOnInit = function () {
    };
    ContentMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-main',
            template: __webpack_require__("../../../../../src/app/components/content-main/content-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/content-main/content-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentMainComponent);
    return ContentMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/content-product/content-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/content-product/content-product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Product Content Start-->\n<div class=\"product-lead bottom-pad\">\n    <div class=\"bg-overlay\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-sm-12 col-xs-12 text-center animate_afl d1\">\n                    <img src=\"assets/img/jumboprint/epson.jpg\" alt=\"\">\n                </div>\n                <div class=\"col-md-6 col-sm-12 col-xs-12 animate_afr d3\">\n                    <div class=\"app-service\">\n                        <h3>Jumbo Print</h3>\n                        <h4>Pružamo visoko kvalitetan ispis u velikim formatima</h4>\n                        <p>Vršimo usluge ispisa velikog formata za vanjsku i unutarnju primjenu. Ispis radimo na novom Epson SC 40610 \n                            printeru koji koristi inovativnu tehnologiju s eko solvet tintama, bez štetnog utjecaja na okoliš.\n                        </p>\n                        <p>\n                            Ispisi su otporni na grebanje, mrljanje i utjecaj vode (na vodootpornim medijima). Nezapaljive tinte \n                            nemaju dodatnih upozorenja, sigurne su za rukovanje i ne zahtijevaju posebno prozračne prostorije.\n                        </p>\n                        <div class=\"divider\"></div>\n                        <div class=\"learnmore\">\n                            <a class=\"btn-special btn-grey\" routerLink=\"/jumboprint\">Saznaj više</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Product Content end-->"

/***/ }),

/***/ "../../../../../src/app/components/content-product/content-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentProductComponent = (function () {
    function ContentProductComponent() {
    }
    ContentProductComponent.prototype.ngOnInit = function () {
    };
    ContentProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-product',
            template: __webpack_require__("../../../../../src/app/components/content-product/content-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/content-product/content-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentProductComponent);
    return ContentProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/features/features.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "        <!-- Features start -->  \n        <div class=\"features bottom-pad\">\n            <div class=\"container\">\n               <div class=\"row\">\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                     <h3  class=\"title\">Our Services</h3>\n                     <div class=\"row\">\n                        <div class=\"circular-nav\">\n                           <div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12 animate_afl\">\n                              <div id=\"cn-tabs\">\n                                 <div class=\"service service-1\">\n                                    <div class=\"cn-content\">\n                                       <h4>Premium Sliders</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                       <div class=\"clearfix\"></div>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-2\">\n                                    <div class=\"cn-content\">\n                                       <h4>Unlimited Colors</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                       <div class=\"clearfix\"></div>\n                                    </div>\n                                 </div>\n                                 <div class=\"service service-3\">\n                                    <div class=\"cn-content\">\n                                       <h4>Shortcodes</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-4\">\n                                    <div class=\"cn-content\">\n                                       <h4>300+ Icons</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-5\">\n                                    <div class=\"cn-content\">\n                                       <h4>HTML5 / CSS3</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-6\">\n                                    <div class=\"cn-content\">\n                                       <h4>After Sale Support</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-7\">\n                                    <div class=\"cn-content\">\n                                       <h4>Google Fonts</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-8\">\n                                    <div class=\"cn-content\">\n                                       <h4>Ajax Contact Form</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                                 <div class=\"service service-9\">\n                                    <div class=\"cn-content\">\n                                       <h4>Valid HTML Files</h4>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n                                       <a href=\"#\">Read More <i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i></a>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"clearfix\"></div>\n                           </div>\n                           <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 animate_afr\">\n                              <div class=\"cn-wrapper\">\n                                 <ul>\n                                    <li class=\"circle-1 circle\"><a class=\"active\" href=\"#\"><span class=\"fa fa-picture-o\"></span></a></li>\n                                    <li class=\"circle-2 circle\"><a href=\"#\"><span class=\"fa fa-rocket\"></span></a></li>\n                                    <li class=\"circle-3 circle\"><a href=\"#\"><span class=\"fa fa-puzzle-piece\"></span> </a></li>\n                                    <li class=\"circle-4 circle\"><a href=\"#\"><span class=\"fa fa-thumbs-o-up\"></span></a></li>\n                                    <li class=\"circle-5 circle\"><a href=\"#\"><span class=\"fa fa-html5\"></span></a></li>\n                                    <li class=\"circle-6 circle\"><a href=\"#\"><span class=\"fa fa-user\"></span></a></li>\n                                    <li class=\"circle-7 circle\"><a href=\"#\"><span class=\"fa fa-google-plus\"></span> </a></li>\n                                    <li class=\"circle-8 circle\"><a href=\"#\"><span class=\"fa fa-envelope-o\"></span></a></li>\n                                    <li class=\"circle-9 circle\"><a href=\"#\"><span class=\"fa fa-hand-o-right\"></span></a></li>\n                                 </ul>\n                                 <div class=\"clearfix\"></div>\n                              </div>\n                           </div>\n                           <div class=\"clearfix\"></div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!-- Features End --> "

/***/ }),

/***/ "../../../../../src/app/components/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-features',
            template: __webpack_require__("../../../../../src/app/components/features/features.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\n    height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n    <!-- Footer Top Start -->\n    <div class=\"footer-top\">\n       <div class=\"container\">\n          <div class=\"row\">\n             <section class=\"col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-one\">\n                <h3>O nama</h3>\n                <p> \n                    Kopiring d.o.o. je tvrtka s dugogodišnjim iskustvom u izradi projektno-tehničke dokumentacije. Obavljamo usluge za arhitektonske biroe, \n                    građevinske tvrtke, elektroinženjere, brodograditelje i sve druge djelatnosti kojima je potreban kvalitetan ispis koji radimo na suvremenim HP i Ricoh uređajima. Obratite nam se s povjerenjem. \n                </p>\n             </section>\n             <section class=\"col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-two\">\n                <h3>Kontakt</h3>\n                <ul class=\"contact-us\">\n                   <li>\n                      <i class=\"fa fa-map-marker\"></i>\n                      <p> \n                         <strong class=\"contact-pad\">Adresa:</strong> Sukoišanska 43<br> 21000 Split\n                      </p>\n                   </li>\n                   <li>\n                      <i class=\"fa fa-phone\"></i>\n                      <p><strong>Telefon:</strong> 021 484 833</p>\n                   </li>\n                   <li>\n                      <i class=\"fa fa-envelope\"></i>\n                      <p><strong>Email:</strong><a href=\"mailto:kopiring.split@st.t-com.hr\">kopiring.split@st.t-com.hr</a></p>\n                   </li>\n                </ul>\n             </section>\n             <section class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 footer-three\">\n                <h3>Gdje smo?</h3>\n                    <div id=\"map\" class=\"map\"></div>  \n             </section>\n          </div>\n       </div>\n    </div>\n    <!-- Footer Top End --> \n    <!-- Footer Bottom Start -->\n    <div class=\"footer-bottom\">\n       <div class=\"container\">\n          <div class=\"row\">\n             <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 \"> &copy; Copyright 2017 <a href=\"#\">Kopiring</a>. Sva prava pridržana. </div>\n             <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 \">\n                <ul class=\"social social-icons-footer-bottom\">\n                   <li class=\"facebook\"><a href=\"http://www.facebook.com/kopiring\" data-toggle=\"tooltip\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                </ul>\n             </div>\n          </div>\n       </div>\n    </div>\n    <!-- Footer Bottom End --> \n </footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var mapInit = function initMap() {
            var uluru = { lat: -25.363, lng: 131.044 };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: new google.maps.LatLng(43.518195, 16.441633)
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(43.518195, 16.441633),
                map: map
            });
            google.maps.event.addDomListener(window, 'resize', function () {
                map.setCenter(map.getCenter());
            });
        }();
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "\n            <div class=\"content\">\n                <div class=\"container\">\n                   <div class=\"row\">\n                      <div class=\"clearfix\"></div>\n                      <div class=\"col-lg-12  col-md-12 col-sm-12 col-xs-12 portfolio-wrap\">\n                         <div class=\"row\">\n                            <div class=\"portfolio\">\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web jquery item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/usluge/letci.jpg\"></app-picture>\n                                     <div class=\"portfolio-item-title\">\n                                        Umjetnički katalozi\n                                        <p>\n                                          Printanje, book uvez\n                                        </p>\n                                     </div>\n                                     <div class=\"clearfix\"></div>\n                                  </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp css item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/usluge/letci2.jpg\"></app-picture>\n                                     <div class=\"portfolio-item-title\">\n                                        Promotivni letci\n                                        <p>\n                                          Printanje\n                                        </p>\n                                     </div>\n                                     <div class=\"clearfix\"></div>\n                                  </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 php jquery wp item\">\n                                  <div class=\"portfolio-item\">\n                                     <app-picture url=\"assets/img/usluge/plakati.jpg\"></app-picture>\n                                     <div class=\"portfolio-item-title\">\n                                       Promotivni banneri\n                                        <p>\n                                          Reklamni paneli\n                                        </p>\n                                     </div>\n                                     <div class=\"clearfix\"></div>\n                                  </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/usluge/kasiranje2.jpg\"></app-picture>\n                                     <div class=\"portfolio-item-title\">\n                                        Ispis grafika\n                                        <p>\n                                          Printanje, kaširanje\n                                        </p>\n                                     </div>\n                                     <div class=\"clearfix\"></div>\n                                  </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n                                <div class=\"portfolio-item\">\n                                  <app-picture url=\"assets/img/usluge/folije1.jpg\"></app-picture>\n                                   <div class=\"portfolio-item-title\">\n                                      Izrada putokaza\n                                      <p>\n                                        Izrezivanje folija\n                                      </p>\n                                   </div>\n                                   <div class=\"clearfix\"></div>\n                                </div>\n                             </div>\n                             <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n                              <div class=\"portfolio-item\">\n                                <app-picture url=\"assets/img/usluge/folije2.jpg\"></app-picture>\n                                 <div class=\"portfolio-item-title\">\n                                    Izrada putokaza\n                                    <p>\n                                      Izrezivanje folija\n                                    </p>\n                                 </div>\n                                 <div class=\"clearfix\"></div>\n                              </div>\n                           </div>\n                           <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n                            <div class=\"portfolio-item\">\n                              <app-picture url=\"assets/img/usluge/zlatotisak3.jpg\"></app-picture>\n                               <div class=\"portfolio-item-title\">\n                                  Pozivnice za vjenčanje\n                                  <p>\n                                    Zlatotisak\n                                  </p>\n                               </div>\n                               <div class=\"clearfix\"></div>\n                            </div>\n                         </div>\n                         <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n                          <div class=\"portfolio-item\">\n                            <app-picture url=\"assets/img/usluge/zlatotisak4.jpg\"></app-picture>\n                             <div class=\"portfolio-item-title\">\n                                Pozivnice za vjenčanje\n                                <p>\n                                  Srebrni tisak\n                                </p>\n                             </div>\n                             <div class=\"clearfix\"></div>\n                          </div>\n                       </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web css wp item\">\n                                  <div class=\"portfolio-item\">\n                                      <app-picture url=\"assets/img/usluge/tabla1.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">               \n                                        Tabla gradilišta\n                                        <p>\n                                          Reklamni paneli\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web php item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/ricoh9003.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">\n                                        Ricoh MP 9003\n                                        <p>\n                                          High resolution printer\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp css item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/ricoh2201.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">               \n                                        Ricoh MP CW 2201 PS\n                                        <p>\n                                          High resolution printer\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web jquery item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/hp7200.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">\n                                          HP DesignJet T7200              \n                                        <p>\n                                            High resolution printer                  \n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 css php wp item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/hp1300side.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">                   \n                                        HP DesignJet T1300\n                                        <p>\n                                            High resolution printer\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 css php wp item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/hp1300.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">                 \n                                        HP DesignJet T1300\n                                        <p>\n                                            High resolution printer\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web php wp item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/ricoh5200side.jpg\"></app-picture>\n                                      <div class=\"portfolio-item-title\">                   \n                                        Ricoh PRO C 5200 S\n                                        <p>\n                                            High resolution printer\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                               <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 css jquery wp item\">\n                                  <div class=\"portfolio-item\">\n                                    <app-picture url=\"assets/img/jumboprint/ricoh5200.png\"></app-picture>\n                                      <div class=\"portfolio-item-title\">                \n                                        Ricoh PRO C 5200 S\n                                        <p>\n                                            High resolution printer\n                                        </p>\n                                      </div>\n                                      <div class=\"clearfix\"></div>\n                                    </div>\n                               </div>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enumerations_menuitem__ = __webpack_require__("../../../../../src/app/enumerations/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = (function () {
    function GalleryComponent(menuService) {
        this.menuService = menuService;
        this.handleImages = function () {
            jQuery('.portfolio-item').hover(function () {
                jQuery(this).find('.portfolio-item-hover').animate({
                    "opacity": 0.8
                }, 100, 'easeInOutCubic');
            }, function () {
                jQuery(this).find('.portfolio-item-hover').animate({
                    "opacity": 0
                }, 100, 'easeInOutCubic');
            });
            jQuery('.portfolio-item').hover(function () {
                jQuery(this).find(".fullscreen").stop().animate({ 'top': '60%', 'opacity': 1 }, 250, 'easeOutBack');
                jQuery(this).find(".portfolio-item-title").addClass('bg-color');
            }, function () {
                jQuery(this).find(".fullscreen").stop().animate({ 'top': '65%', 'opacity': 0 }, 150, 'easeOutBack');
                jQuery(this).find(".portfolio-item-title").removeClass('bg-color');
            });
        };
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.menuService.setSelectedMenuItem(__WEBPACK_IMPORTED_MODULE_0__enumerations_menuitem__["a" /* MenuItem */].Gallery);
        this.handleImages();
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header Start -->\n<header id=\"header\">\n  <!-- Header Top Bar Start -->\n  <div class=\"top-bar\">\n    <div class=\"slidedown collapse\">\n      <div class=\"container\">\n        <div class=\"phone-email pull-left\">\n          <a>\n            <i class=\"fa fa-phone\"></i> Nazovite nas : 021 484 833</a>\n          <a href=\"mailto:kopiring.split@st.t-com.hr\">\n            <i class=\"fa fa-envelope\"></i> Email : kopiring.split@st.t-com.hr</a>\n        </div>\n        <div class=\"follow-us pull-right\">\n          <ul class=\"social pull-left\">\n            <li class=\"facebook\">\n              <a href=\"http://www.facebook.com/kopiring\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Header Top Bar End -->\n  <!-- Main Header Start -->\n  <div class=\"main-header\">\n    <div class=\"container\">\n      <!-- TopNav Start -->\n      <div class=\"topnav navbar-header\">\n        <a class=\"navbar-toggle down-button\" data-toggle=\"collapse\" data-target=\".slidedown\">\n          <i class=\"fa fa-angle-down icon-current\"></i>\n        </a>\n      </div>\n      <!-- TopNav End -->\n      <!-- Logo Start -->\n      <div class=\"logo pull-left\">\n        <h1 class=\"margin-top-5px\">\n          <a href=\"index.html\">\n            <img src=\"assets/img/logo-white.png\" alt=\"pixma\" width=\"250\" height=\"76\">\n          </a>\n        </h1>\n      </div>\n      <!-- Logo End -->\n      <!-- Mobile Menu Start -->\n      <div class=\"mobile navbar-header\">\n        <a class=\"navbar-toggle\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n          <i class=\"fa fa-bars fa-2x\"></i>\n        </a>\n      </div>\n      <!-- Mobile Menu End -->\n      <!-- Menu Start -->\n      <nav class=\"collapse navbar-collapse menu\">\n        <ul class=\"nav navbar-nav sf-menu\">\n          <li>\n            <a [ngClass]=\"{'current-menu-item': selectedMenuItem === menuItem.Home}\" routerLink=\"/home\">\n              Home\n            </a>\n          </li>\n          <li>\n            <a [ngClass]=\"{'current-menu-item': selectedMenuItem === menuItem.Services}\" routerLink=\"/services\">\n              Usluge\n            </a>\n          </li>\n          <li>\n            <a [ngClass]=\"{'current-menu-item': selectedMenuItem === menuItem.JumboPrint}\" routerLink=\"/jumboprint\">\n              Jumbo Print\n            </a>\n          </li>\n          <li>\n            <a [ngClass]=\"{'current-menu-item': selectedMenuItem === menuItem.Gallery}\" routerLink=\"/gallery\">\n              Galerija\n            </a>\n          </li>\n          <li>\n          <a [ngClass]=\"{'current-menu-item': selectedMenuItem === menuItem.Contact}\" routerLink=\"/contact\">\n              Kontakt\n          </a>\n          </li>\n        </ul>\n      </nav>\n      <!-- Menu End -->\n    </div>\n  </div>\n  <!-- Main Header End -->\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__ = __webpack_require__("../../../../../src/app/enumerations/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(menuService, router) {
        var _this = this;
        this.menuService = menuService;
        this.router = router;
        this.menuItem = __WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__["a" /* MenuItem */];
        this.getSelectedItem = function () {
            _this.selectedMenuItem = _this.menuService.getSelectedMenuItem();
        };
        this.handleRouteChange = function () {
            _this.router.events.subscribe(function (event) {
                setTimeout(function () { return _this.getSelectedItem(); }, 100);
            });
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.menuService.setSelectedMenuItem(this.menuItem.Home);
        this.getSelectedItem();
        this.handleRouteChange();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-slogan></app-slogan>\n<app-content-main></app-content-main>\n<app-content-product></app-content-product>\n<app-references></app-references>\n<!-- <app-features></app-features> -->\n<!-- <app-latest-posts></app-latest-posts> -->\n<app-clients></app-clients>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__ = __webpack_require__("../../../../../src/app/enumerations/menuitem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(menuService) {
        this.menuService = menuService;
        this.handleJQuery = function () {
            jQuery("body").imagesLoaded(function () {
                jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").waypoint(function () {
                    if (!jQuery(this).hasClass("animate_start")) {
                        var e = jQuery(this);
                        setTimeout(function () {
                            e.addClass("animate_start");
                        }, 20);
                    }
                }, {
                    offset: "85%",
                    triggerOnce: !0
                });
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.menuService.setSelectedMenuItem(__WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__["a" /* MenuItem */].Home);
        this.handleJQuery();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/jumboprint/jumboprint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jumboprint/jumboprint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"divider\"></div>\n    <div class=\"row\">\n        <div class=\"clearfix\"></div>\n        <div class=\"col-lg-12  col-md-12 col-sm-12 col-xs-12 portfolio-wrap\">\n          <div class=\"row\">\n            <div class=\"portfolio\">\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web jquery item\">\n                  <div class=\"portfolio-item\">\n                <app-picture url=\"assets/img/jumboprint/ricoh5200.png\"></app-picture>\n                  <div class=\"portfolio-item-title\">                \n                    Ricoh PRO C 5200 S\n                    <p>\n                        High resolution printer\n                    </p>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp css item\">\n                <div class=\"portfolio-item\">\n                  <app-picture url=\"assets/img/jumboprint/ricoh5200side.jpg\"></app-picture>\n                  <div class=\"portfolio-item-title\">                   \n                    Ricoh PRO C 5200 S\n                    <p>\n                        High resolution printer\n                    </p>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 php jquery wp item\">\n                <div class=\"portfolio-item\">\n                  <app-picture url=\"assets/img/jumboprint/hp1300.jpg\"></app-picture>\n                  <div class=\"portfolio-item-title\">                 \n                    HP DesignJet T1300\n                    <p>\n                        High resolution printer\n                    </p>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n                <div class=\"portfolio-item\">\n                  <app-picture url=\"assets/img/jumboprint/hp1300side.jpg\"></app-picture>\n                  <div class=\"portfolio-item-title\">                   \n                    HP DesignJet T1300\n                    <p>\n                        High resolution printer\n                    </p>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n  <div class=\"divider\"></div>\n  <div class=\"row\">\n\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 padding-bottom-20px panel-group\">\n      <h3 class=\"title\">Ispis na samoljepljive medije</h3>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Permanent Gloss Adhesive Vinyl </h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Photo-realistic Poster Paper</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP PVC-free Gloss Adhesive Film</h4>\n        </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 padding-bottom-20px\">\n      <h3 class=\"title\">Photo-Digital Art mediji</h3>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Satin Canvas</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Photo-realistic Poster Paper</h4>\n        </div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 padding-bottom-20px\">\n      <h3 class=\"title\">Baneri za vanjsku upotrebu</h3>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Durable Frontlit Scrim Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Outdoor Frontlit Scrim Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">High Density Polyethylene (HDPE) Reinforced Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP DuPont Tyvek Banner </h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Mesh Banner with Liner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Backlit Scrim Banner</h4>\n        </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 padding-bottom-20px\">\n      <h3 class=\"title\">Mediji za postere</h3>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Permanent Gloss Adhesive Vinyl</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">Photo-realistic Poster Paper </h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">Light Boxes - HP Backlit Scrim Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">Light Boxes - HP White Satin Poster Paper </h4>\n        </div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 padding-bottom-20px\">\n      <h3 class=\"title\">Jumbo plakati</h3>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Durable Frontlit Scrim Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">High Density Polyethylene (HDPE) Reinforced Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP DuPont Tyvek Banner </h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Heavy Textile Banner</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Light Textile Display Banner</h4>\n        </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-xs-12 col-sm-6 padding-bottom-20px\">\n      <h3 class=\"title\">Zidni tapeti (Wall murals)</h3>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP PVC-free Wall Paper</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">Permanent Gloss Adhesive Vinyl </h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP Permanent Matte Adhesive Vinyl</h4>\n        </div>\n        <div class=\"accordion-item\">\n          <h4 class=\"accordion-toggle\">HP PVC-free Gloss Adhesive Film </h4>\n        </div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n  </div>\n  <div class=\"divider\"></div>\n\n  <div class=\"row\">\n    <div class=\"clearfix\"></div>\n    <div class=\"col-lg-12  col-md-12 col-sm-12 col-xs-12 portfolio-wrap\">\n      <div class=\"row\">\n        <div class=\"portfolio\">\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 web jquery item\">\n            <div class=\"portfolio-item\">\n              <app-picture url=\"assets/img/jumboprint/xante_ilumina.jpg\"></app-picture>\n              <div class=\"portfolio-item-title\">               \n                Xante Ilumina HWC\n                <p>\n                  High resolution printer\n                </p>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp css item\">\n            <div class=\"portfolio-item\">\n              <app-picture url=\"assets/img/jumboprint/ricoh9003.jpg\"></app-picture>\n              <div class=\"portfolio-item-title\">\n                Ricoh MP 9003\n                <p>\n                  High resolution printer\n                </p>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 php jquery wp item\">\n            <div class=\"portfolio-item\">\n              <app-picture url=\"assets/img/jumboprint/ricoh2201.jpg\"></app-picture>\n              <div class=\"portfolio-item-title\">               \n                Ricoh MP CW 2201 PS\n                <p>\n                  High resolution printer\n                </p>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 wp jquery css item\">\n            <div class=\"portfolio-item\">\n              <app-picture url=\"assets/img/jumboprint/hp7200.jpg\"></app-picture>\n              <div class=\"portfolio-item-title\">\n                  HP DesignJet T7200              \n                <p>\n                    High resolution printer                  \n                </p>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/jumboprint/jumboprint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumboprintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enumerations_menuitem__ = __webpack_require__("../../../../../src/app/enumerations/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JumboprintComponent = (function () {
    function JumboprintComponent(menuService) {
        this.menuService = menuService;
        this.handleJQuery = function () {
            /*----------------------------------------------------*/
            /*	Accordion Section
            /*----------------------------------------------------*/
            jQuery(document).ready(function () {
                jQuery('.accordionMod').each(function (index) {
                    var thisBox = jQuery(this).children(), thisMainIndex = index + 1;
                    jQuery(this).attr('id', 'accordion' + thisMainIndex);
                    thisBox.each(function (i) {
                        var thisIndex = i + 1, thisParentIndex = thisMainIndex, thisMain = jQuery(this).parent().attr('id'), thisTriggers = jQuery(this).find('.accordion-toggle'), thisBoxes = jQuery(this).find('.accordion-inner');
                        jQuery(this).addClass('panel');
                        thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
                        thisTriggers.wrap('<div class=\"panel-heading\" />');
                        thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' +
                            thisParentIndex + '_' + thisIndex);
                    });
                    jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
                    // jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
                    // jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
                    // jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
                    jQuery('.accordionMod .accordion-toggle').click(function () {
                        if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
                            jQuery(this).removeClass('current');
                            jQuery(this).find('.icon').removeClass('iconActive');
                        }
                        else {
                            jQuery(this).addClass('current');
                            jQuery(this).find('.icon').addClass('iconActive');
                        }
                        jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
                        jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
                    });
                });
            });
        };
    }
    JumboprintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setSelectedMenuItem(__WEBPACK_IMPORTED_MODULE_1__enumerations_menuitem__["a" /* MenuItem */].JumboPrint);
        setTimeout(function () { return _this.handleJQuery(); }, 500);
    };
    JumboprintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-jumboprint',
            template: __webpack_require__("../../../../../src/app/components/jumboprint/jumboprint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/jumboprint/jumboprint.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_menu_service__["a" /* MenuService */]])
    ], JumboprintComponent);
    return JumboprintComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/latest-posts/latest-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/latest-posts/latest-posts.component.html":
/***/ (function(module, exports) {

module.exports = "            <!-- Latest Posts start --> \n            <div class=\"latest-posts\">\n                <div class=\"container\">\n                   <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 com-sm-12 col-xs-12\">\n                         <h3 class=\"title\">Latest Posts</h3>\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"blog-showcase col-lg-12 col-md-12 col-sm-12 col-xs-12 animate_afb d1\">\n                         <ul>\n                            <li class=\"\">\n                               <div class=\"blog-showcase-thumb col-lg-4\">\n                                  <div class=\"post-body\">\n                                     <a class=\"post-item-link\" href=\"assets/img/portfolio/portfolio-5.jpg\" data-rel=\"prettyPhoto\"><span class=\"post-item-hover\"></span><span class=\"fullscreen\"><i class=\"fa fa-search\"></i></span><img alt=\"\" src=\"assets/img/portfolio/portfolio-5.jpg\"></a>\n                                  </div>\n                               </div>\n                               <div class=\"blog-showcase-extra-info col-lg-4\">\n                                  <span><a href=\"#\">Sep 11th, 2013</a></span>\n                                  <h4><a href=\"#\" class=\"title\">Blog post title</a></h4>\n                                  <p>Mauris sed mauris bibendum est imperdiet porttitor tincidunt at lorem. Proin augue massa</p>\n                                  <a href=\"#\">Read more <i class=\"fa fa-angle-double-right\"></i></a>\n                               </div>\n                            </li>\n                            <li>\n                               <div class=\"blog-showcase-thumb col-lg-4\">\n                                  <div class=\"post-body\">\n                                     <a class=\"post-item-link\" href=\"assets/img/portfolio/portfolio-6.jpg\" data-rel=\"prettyPhoto\"><span class=\"post-item-hover\"></span><span class=\"fullscreen\"><i class=\"fa fa-search\"></i></span><img alt=\"\" src=\"assets/img/portfolio/portfolio-6.jpg\"></a>\n                                  </div>\n                               </div>\n                               <div class=\"blog-showcase-extra-info col-lg-4\">\n                                  <span><a href=\"#\">Sep 11th, 2013</a></span>\n                                  <h4><a href=\"#\" class=\"title\">Blog post title</a></h4>\n                                  <p>Mauris sed mauris bibendum est imperdiet porttitor tincidunt at lorem. Proin augue massa</p>\n                                  <a href=\"#\">Read more <i class=\"fa fa-angle-double-right\"></i></a>\n                               </div>\n                            </li>\n                            <li class=\"blog-first-el\">\n                               <div class=\"blog-showcase-thumb col-lg-4\">\n                                  <div class=\"post-body\">\n                                     <a class=\"post-item-link\" href=\"assets/img/portfolio/portfolio-7.jpg\" data-rel=\"prettyPhoto\"><span class=\"post-item-hover\"></span><span class=\"fullscreen\"><i class=\"fa fa-search\"></i></span><img alt=\"\" src=\"assets/img/portfolio/portfolio-7.jpg\"></a>\n                                  </div>\n                               </div>\n                               <div class=\"blog-showcase-extra-info col-lg-4\">\n                                  <span><a href=\"#\">Sep 11th, 2013</a></span>\n                                  <h4><a href=\"#\" class=\"title\">Blog post title</a></h4>\n                                  <p>Mauris sed mauris bibendum est imperdiet porttitor tincidunt at lorem. Proin augue massa</p>\n                                  <a href=\"#\">Read more <i class=\"fa fa-angle-double-right\"></i></a>\n                               </div>\n                            </li>\n                         </ul>\n                         <div class=\"clearfix\"></div>\n                      </div>\n                   </div>\n                   <div class=\"divider\"></div>\n                </div>\n             </div>\n             <!-- Latest Posts End -->"

/***/ }),

/***/ "../../../../../src/app/components/latest-posts/latest-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LatestPostsComponent = (function () {
    function LatestPostsComponent() {
    }
    LatestPostsComponent.prototype.ngOnInit = function () {
    };
    LatestPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-latest-posts',
            template: __webpack_require__("../../../../../src/app/components/latest-posts/latest-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/latest-posts/latest-posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LatestPostsComponent);
    return LatestPostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.html":
/***/ (function(module, exports) {

module.exports = "<a #prettyPictureLink href=\"{{url}}\" class=\"portfolio-item-link\" data-rel=\"prettyPhoto\" >\n  <span class=\"portfolio-item-hover\"></span>\n  <span class=\"fullscreen\"><i class=\"fa fa-search\"></i></span><img src=\"{{url}}\" alt=\" \"/>\n  </a>\n"

/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureComponent = (function () {
    function PictureComponent(elRef) {
        this.elRef = elRef;
        this.handlePictureView = function (elRef) {
            $(document).ready(function () {
                $(elRef.nativeElement.querySelector('.portfolio-item-link')).prettyPhoto({
                    animation_speed: 'fast',
                    slideshow: 5000,
                    autoplay_slideshow: false,
                    opacity: 0.80,
                    show_title: true,
                    allow_resize: true,
                    default_width: 500,
                    default_height: 344,
                    counter_separator_label: '/',
                    theme: 'pp_default',
                    horizontal_padding: 20,
                    hideflash: false,
                    wmode: 'opaque',
                    autoplay: true,
                    modal: false,
                    deeplinking: true,
                    overlay_gallery: true,
                    keyboard_shortcuts: true,
                    changepicturecallback: function () { },
                    callback: function () { },
                    ie6_fallback: true,
                    markup: '<div class="pp_pic_holder"> \
              <div class="ppt">&nbsp;</div> \
              <div class="pp_top"> \
                <div class="pp_left"></div> \
                <div class="pp_middle"></div> \
                <div class="pp_right"></div> \
              </div> \
              <div class="pp_content_container"> \
                <div class="pp_left"> \
                <div class="pp_right"> \
                  <div class="pp_content"> \
                    <div class="pp_loaderIcon"></div> \
                    <div class="pp_fade"> \
                      <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                      <div class="pp_hoverContainer"> \
                        <a class="pp_next" href="#">next</a> \
                        <a class="pp_previous" href="#">previous</a> \
                      </div> \
                      <div id="pp_full_res"></div> \
                      <div class="pp_details"> \
                        <div class="pp_nav"> \
                          <a href="#" class="pp_arrow_previous">Previous</a> \
                          <p class="currentTextHolder">0/0</p> \
                          <a href="#" class="pp_arrow_next">Next</a> \
                        </div> \
                        <p class="pp_description"></p> \
                        {pp_social} \
                        <a class="pp_close" href="#">Close</a> \
                      </div> \
                    </div> \
                  </div> \
                </div> \
                </div> \
              </div> \
              <div class="pp_bottom"> \
                <div class="pp_left"></div> \
                <div class="pp_middle"></div> \
                <div class="pp_right"></div> \
              </div> \
            </div> \
            <div class="pp_overlay"></div>',
                    gallery_markup: '<div class="pp_gallery"> \
                  <a href="#" class="pp_arrow_previous">Previous</a> \
                  <div> \
                    <ul> \
                      {gallery} \
                    </ul> \
                  </div> \
                  <a href="#" class="pp_arrow_next">Next</a> \
                </div>',
                    image_markup: '<img id="fullResImage" src="{path}" />',
                    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                    inline_markup: '<div class="pp_inline">{content}</div>',
                    custom_markup: '',
                });
            });
        };
    }
    PictureComponent.prototype.ngAfterViewInit = function () {
        this.handlePictureView(this.elRef);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PictureComponent.prototype, "url", void 0);
    PictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-picture',
            template: __webpack_require__("../../../../../src/app/components/picture/picture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/picture/picture.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PictureComponent);
    return PictureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/references/references.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/references/references.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Recent works start-->\n<div class=\"bottom-pad\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 animate_afl d1\">\n                <h3 class=\"title\">Projekti</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-xs-12\">\n                <div class=\"row portfolio-pad\">\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d2\">\n                        <div class=\"portfolio-item\">\n                                <app-picture url=\"assets/img/usluge/kasiranje2.jpg\"></app-picture>\n                                <div class=\"portfolio-item-title\">\n                                    Ispis grafika\n                                    <p>\n                                        Printanje, kaširanje\n                                    </p>\n                                </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d3\">\n                        <div class=\"portfolio-item\">\n                            <app-picture url=\"assets/img/usluge/plakati.jpg\"></app-picture>\n                            <div class=\"portfolio-item-title\">\n                                Promotivni banneri\n                                <p>\n                                    Reklamni paneli\n                                </p>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d4\">\n                        <div class=\"portfolio-item\">\n                            <app-picture url=\"assets/img/usluge/bookuvez.jpg\"></app-picture>\n                            <div class=\"portfolio-item-title\">\n                                Diplomski radovi\n                                <p>\n                                    Zlatotisak, uvez knjiga\n                                </p>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d5\">\n                        <div class=\"portfolio-item\">\n                            <app-picture url=\"assets/img/usluge/letci2.jpg\"></app-picture>\n                            <div class=\"portfolio-item-title\">\n                                Promotivni letci\n                                <p>\n                                    Printanje\n                                </p>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d6\">\n                        <div class=\"portfolio-item\">\n                            <app-picture url=\"assets/img/usluge/letci.jpg\"></app-picture>\n                            <div class=\"portfolio-item-title\">\n                                Umjetnički katalozi\n                                <p>\n                                    Printanje, book uvez\n                                </p>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d7\">\n                        <div class=\"portfolio-item\">\n                            <app-picture url=\"assets/img/usluge/kasiranje3.jpg\"></app-picture>\n                            <div class=\"portfolio-item-title\">\n                                Table gradilišta\n                                <p>\n                                    Reklamni paneli\n                                </p>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Recent work end-->"

/***/ }),

/***/ "../../../../../src/app/components/references/references.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferencesComponent = (function () {
    function ReferencesComponent() {
        this.handleJQuery = function () {
            jQuery(document).ready(function () {
                $('.portfolio-item').hover(function () {
                    $(this).find('.portfolio-item-hover').animate({
                        "opacity": 0.8
                    }, 100, 'easeInOutCubic');
                }, function () {
                    $(this).find('.portfolio-item-hover').animate({
                        "opacity": 0
                    }, 100, 'easeInOutCubic');
                });
                $('.portfolio-item').hover(function () {
                    $(this).find(".fullscreen").stop().animate({ 'top': '60%', 'opacity': 1 }, 250, 'easeOutBack');
                    $(this).find(".portfolio-item-title").addClass('bg-color');
                }, function () {
                    $(this).find(".fullscreen").stop().animate({ 'top': '65%', 'opacity': 0 }, 150, 'easeOutBack');
                    $(this).find(".portfolio-item-title").removeClass('bg-color');
                });
            });
        };
    }
    ReferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.handleJQuery(); }, 1000);
    };
    ReferencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-references',
            template: __webpack_require__("../../../../../src/app/components/references/references.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/references/references.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferencesComponent);
    return ReferencesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\">\n</div>\n<!-- 3 Column Big Services -->\n<div class=\"services-big padding-bottom-50px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <h3 class=\"title\">Naše usluge</h3>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"content-box\">\n          <div class=\"content-box-icon\">\n            <img src=\"assets/img/usluge/plotanje.jpeg\" alt=\" \" />\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Plotanje</h4>\n            <p>\n              Usluge plotanja arhitektonskih, građevinskih i geodetskim nacrta u mjerilu po želji. Plotanje na velike formate, crno-bijelo\n              ili u boji. Ispis podloga iz modernih računalnih programa poput AutoCAD-a.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"content-box\">\n          <div class=\"content-box-icon\">\n            <img src=\"assets/img/usluge/kopiranje.jpg\" alt=\" \" />\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Fotokopiranje i skeniranje</h4>\n            <p>\n              Fotokopiranje i skeniranje skripti, projekata, knjiga ili osobnih dokumenata. Fotokopiranje crno-bijelo ili\n              u boji, jednostrano ili obostrano. Skeniranje crno-bijelo ili u boji.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"content-box\">\n          <div class=\"content-box-icon\">\n            <img src=\"assets/img/usluge/plastificiranje.jpg\" alt=\" \" />\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Plastificiranje</h4>\n            <p>\n                Sjajna ili mat plastifikacija, PVC pjenaste ploče - Forex, Plexiglass - Extrudirano akrilno staklo, višeslojne polikarbonatne\n                ploče - Lexan, sačasti polypropylen, lagani polypropylen s bubble strukturom, Kartoni - mikrovalna ljepenka, Triplex.\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- 3 Column Services End-->\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>\n<!-- 3 Column Big Services -->\n<div class=\"services-big\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"clearfix\"></div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"content-box\">\n          <div class=\"content-box-icon\">\n            <img src=\"assets/img/usluge/kasiranje.jpg\" alt=\" \" />\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Kaširanje</h4>\n            <p>\n              Pružamo usluge kaširanja (ljepljenja na čvrstu ravnu podlogu) fotografija, postera, umjetničkih slika u raznim formatima.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"content-box\">\n          <div class=\"content-box-icon\">\n            <img src=\"assets/img/usluge/uvezivanje.jpg\" alt=\" \" />\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Uvezivanje projekata</h4>\n            <p>\n              Uvezivanje arhitektonskih, građevinskih i strojarskih nacrta i tekstova u gotove projekte. Pružamo širok izbor tehnika uvezivanja\n              projekata i odgovarajućih korica.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"content-box\">\n          <div class=\"content-box-icon\">\n            <img src=\"assets/img/usluge/folije3.jpg\" alt=\" \" />\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Izrezivanje folija</h4>\n            <p>\n              Izrezivanje oblika po različitim uzorcima i predlošcima. Izrezivanje iz širokog spektra vodootpornih \n              i visokokvalitenih folija.\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- 3 Column Services End-->\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"divider\"></div>\n\n<div class=\"divider\"></div>\n<!-- 3 Column Services -->\n<div class=\"services\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <h3 class=\"title\">Dodatne usluge</h3>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 bottom-pad\">\n        <div class=\"content-box ch-item\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-font\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-font\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Zlatotisak</h4>\n            <p>\n              Usluga zlatnog ispisa na različite vrste korica (diplomski, magistarski, doktorski radovi...)\n              Naš najnoviji pisač, Foil ExpressTM ima mogućnost ispisa zlatotiska na planere, dnevnike, korice knjiga, foto albume, čestitke, poklone i sl. \n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 bottom-pad\">\n        <div class=\"content-box ch-item\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-book\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-book\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Uvez knjiga</h4>\n            <p>\n              Uvezivanje arhitektonskih, građevinskih i strojarskih nacrta i tekstova u gotove projekte. Pružamo širok izbor tehnika uvezivanja\n              projekata i odgovarajućih korica.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 bottom-pad\">\n        <div class=\"content-box ch-item\">\n          <div class=\"ch-info-wrap\">\n            <div class=\"ch-info\">\n              <div class=\"ch-info-front ch-img-1\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n              </div>\n              <div class=\"ch-info-back\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-box-info\">\n            <h4>Reklamni paneli</h4>\n            <p>\n              Radimo plakate, reklame i reklamne panele velikih dimenzija i visoke rezolucije ispisa, u potpunosti prilagođeno vašim \n              željama i potrebama.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"divider\"></div>\n<div class=\"service-reasons\">\n  <div class=\"bg-overlay\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <h3 class=\"title\">Zašto raditi s nama?</h3>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"reasons\">\n          <div class=\"col-lg-4 col-md-4 col-sm-4 animate_afc d1\">\n            <div class=\"content-box big ch-item bottom-pad-small\">\n              <div class=\"ch-info-wrap\">\n                <div class=\"ch-info\">\n                  <div class=\"ch-info-front ch-img-1\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                  <div class=\"ch-info-back\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                </div>\n              </div>\n              <div class=\"content-box-info\">\n                <h3>Visoka kvaliteta</h3>\n                <p>\n                  Bilo da se radi o plotanju, zlatotisku, ispisu u visokoj rezoluciji, ili izradi reklamnih materijala, naša tvrtka uvijek isporučuje vrhunske\n                  proizvode, uz visoko kvalitetan ispis i materijale.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-4 col-sm-4 animate_afc d2\">\n            <div class=\"content-box big ch-item bottom-pad-small\">\n              <div class=\"ch-info-wrap\">\n                <div class=\"ch-info\">\n                  <div class=\"ch-info-front ch-img-1\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                  <div class=\"ch-info-back\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                </div>\n              </div>\n              <div class=\"content-box-info\">\n                <h3>Moderna tehnologija</h3>\n                <p>\n                  Naša je tvrtka opremljena modernom grafičkom opremom i suvremenim strojevima, kako bismo pružili što bolju uslugu našim klijentima.\n                  U našu računalnu opremu i edukaciju djelatnika ulažemo neprestano s ciljem postizanja što boljeg proizvoda.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-4 col-sm-4 animate_afc d3\">\n            <div class=\"content-box big ch-item\">\n              <div class=\"ch-info-wrap\">\n                <div class=\"ch-info\">\n                  <div class=\"ch-info-front ch-img-1\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                  <div class=\"ch-info-back\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                </div>\n              </div>\n              <div class=\"content-box-info\">\n                <h3>Brzina isporuke</h3>\n                <p>\n                  Ključna stvar u svim projektima je pravovremena isporuka projektne dokumentacije. S nama uvijek možete računati na brzu\n                  i odgovornu isporuku, a kako bi uštedjeli na vremenu podloge nam možete poslati mailom.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__ = __webpack_require__("../../../../../src/app/enumerations/menuitem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesComponent = (function () {
    function ServicesComponent(menuService) {
        this.menuService = menuService;
        this.handleJQuery = function () {
            jQuery('.service-reasons').parallax("50%", 0.1);
            jQuery("body").imagesLoaded(function () {
                jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").waypoint(function () {
                    if (!jQuery(this).hasClass("animate_start")) {
                        var e = jQuery(this);
                        setTimeout(function () {
                            e.addClass("animate_start");
                        }, 20);
                    }
                }, {
                    offset: "85%",
                    triggerOnce: !0
                });
            });
        };
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.menuService.setSelectedMenuItem(__WEBPACK_IMPORTED_MODULE_2__enumerations_menuitem__["a" /* MenuItem */].Services);
        this.handleJQuery();
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/slogan/slogan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slogan/slogan.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Slogan Start-->\n<div class=\"slogan bottom-pad-small banner-collapse\">\n    <div class=\"container\">\n       <div class=\"row\">\n          <div class=\"slogan-content\">\n             <div class=\"col-lg-9 col-md-9\">\n                <h2 class=\"slogan-title\">Pružamo široki spektar raznih grafičkih usluga!</h2>\n             </div>\n             <div class=\"col-lg-3 col-md-3\">\n                <div class=\"get-started\">\n                   <button routerLink='/contact' class=\"btn btn-special btn-color pull-right\">Zatražite ponudu</button>\n                </div>\n             </div>\n             <div class=\"clearfix\"></div>\n          </div>\n       </div>\n    </div>\n </div>\n <!-- Slogan End--> \n"

/***/ }),

/***/ "../../../../../src/app/components/slogan/slogan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SloganComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SloganComponent = (function () {
    function SloganComponent() {
    }
    SloganComponent.prototype.ngOnInit = function () {
    };
    SloganComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-slogan',
            template: __webpack_require__("../../../../../src/app/components/slogan/slogan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/slogan/slogan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SloganComponent);
    return SloganComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/style-switcher/style-switcher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/style-switcher/style-switcher.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"style-switcher\">\n    <h2>Style Switcher <a href=\"#\"><i class=\"fa fa-cog\"></i></a></h2>\n    <div>\n       <h3>Predefined Colors</h3>\n       <ul class=\"colors\">\n          <li><a title=\"Blue\" class=\"blue\" href=\"#\"></a></li>\n          <li><a title=\"Green\" class=\"green\" href=\"#\"></a></li>\n          <li><a title=\"Orange\" class=\"orange\" href=\"#\"></a></li>\n          <li><a title=\"Purple\" class=\"purple\" href=\"#\"></a></li>\n          <li><a title=\"Red\" class=\"red\" href=\"#\"></a></li>\n          <li><a title=\"Magenta\" class=\"magenta\" href=\"#\"></a></li>\n          <li><a title=\"Brown\" class=\"brown\" href=\"#\"></a></li>\n          <li><a title=\"Gray\" class=\"gray\" href=\"#\"></a></li>\n          <li><a title=\"Golden\" class=\"golden\" href=\"#\"></a></li>\n          <li><a title=\"Teal\" class=\"teal\" href=\"#\"></a></li>\n       </ul>\n       <h3>Layout Style</h3>\n       <div class=\"layout-style\">\n          <select id=\"layout-style\">\n             <option value=\"1\">Wide</option>\n             <option value=\"2\">Boxed</option>\n          </select>\n       </div>\n       <h3>Header Color</h3>\n       <div class=\"header-color\">\n          <input type='text' class=\"header-bg\" />\n       </div>\n       <h3>Footer Top Color</h3>\n       <div class=\"header-color\">\n          <input type='text' class=\"footer-bg\" />\n       </div>\n       <h3>Footer Bottom Color</h3>\n       <div class=\"header-color\">\n          <input type='text' class=\"footer-bottom\" />\n       </div>\n       <h3>Background Image</h3>\n       <ul id=\"bg\" class=\"colors bg\">\n          <li><a class=\"bg1\" href=\"#\"></a></li>\n          <li><a class=\"bg2\" href=\"#\"></a></li>\n          <li><a class=\"bg3\" href=\"#\"></a></li>\n          <li><a class=\"bg4\" href=\"#\"></a></li>\n          <li><a class=\"bg5\" href=\"#\"></a></li>\n          <li><a class=\"bg6\" href=\"#\"></a></li>\n          <li><a class=\"bg7\" href=\"#\"></a></li>\n          <li><a class=\"bg8\" href=\"#\"></a></li>\n          <li><a class=\"bg9\" href=\"#\"></a></li>\n          <li><a class=\"bg10\" href=\"#\"></a></li>\n       </ul>\n    </div>\n </section>\n"

/***/ }),

/***/ "../../../../../src/app/components/style-switcher/style-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StyleSwitcherComponent = (function () {
    function StyleSwitcherComponent() {
    }
    StyleSwitcherComponent.prototype.ngOnInit = function () {
    };
    StyleSwitcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-style-switcher',
            template: __webpack_require__("../../../../../src/app/components/style-switcher/style-switcher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/style-switcher/style-switcher.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StyleSwitcherComponent);
    return StyleSwitcherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n  [class*='col-']:last-of-type {\n    padding-right: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n  *, *:after, *:before {\n    box-sizing: border-box;\n  }\n  h3 {\n    text-align: center; margin-bottom: 0;\n  }\n  h4 {\n    position: relative;\n  }\n  .grid {\n    margin: 0;\n  }\n  .col-1-4 {\n    width: 25%;\n  }\n  .module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #607D8B;\n    border-radius: 2px;\n  }\n  .module:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #607d8b;\n  }\n  .grid-pad {\n    padding: 10px 0;\n  }\n  .grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n  @media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n  @media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n  routerLink=\"/detail/{{hero.id}}\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/enumerations/menuitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem;
(function (MenuItem) {
    MenuItem[MenuItem["Home"] = 1] = "Home";
    MenuItem[MenuItem["Services"] = 2] = "Services";
    MenuItem[MenuItem["JumboPrint"] = 3] = "JumboPrint";
    MenuItem[MenuItem["Gallery"] = 4] = "Gallery";
    MenuItem[MenuItem["Contact"] = 5] = "Contact";
})(MenuItem || (MenuItem = {}));


/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  \n    <h2>{{ hero.name | uppercase }} Details</h2>\n    <div><span>id: </span>{{hero.id}}</div>\n    <div>\n        <label>name:\n          <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n        </label>\n    </div>\n    <button (click)=\"goBack()\">go back</button>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroService = (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes';
    }
    /** GET heroes from the server */
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (heroes) { return _this.log("fetched heroes"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getHeroes', [])));
    };
    /** GET hero by id. Will 404 if id not found */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    HeroService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroesComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"heroes\">\n  <p>tesssseewe432443234st</p>\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-heroes',
            template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__hero_service__["a" /* HeroService */]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MessagesComponent's private CSS styles */\nh2 {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\n  body {\n    margin: 2em;\n  }\n  body, input[text], button {\n    color: crimson;\n    font-family: Cambria, Georgia;\n  }\n   \n  button.clear {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  button:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }\n  button.clear {\n    color: #888;\n    margin-bottom: 12px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  \n    <h2>Messages</h2>\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
        var _this = this;
        this.getSelectedMenuItem = function () {
            return _this.selectedMenuItem;
        };
        this.setSelectedMenuItem = function (item) {
            _this.selectedMenuItem = item;
        };
    }
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = (function () {
    function UserService() {
        this.userName = 'Sherlock Holmes';
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /** Dummy version of an authenticated user service */
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map