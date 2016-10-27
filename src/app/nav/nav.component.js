"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var core_service_1 = require('../core/core.service');
var NavComponent = (function () {
    function NavComponent(router, coreService) {
        this.router = router;
        this.coreService = coreService;
    }
    NavComponent.prototype.getStudios = function () {
        var _this = this;
        this.coreService.getStudios().then(function (studios) { return _this.studios = studios; });
    };
    NavComponent.prototype.goToStudio = function (studioId) {
        this.selectedStudio = studioId;
        this.router.navigate(['/studio', studioId]);
    };
    NavComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    NavComponent.prototype.ngOnInit = function () {
        this.getStudios();
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mcu-nav',
            templateUrl: 'nav.component.html',
            styleUrls: ['nav.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_service_1.CoreService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map