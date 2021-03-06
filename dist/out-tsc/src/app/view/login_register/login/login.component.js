var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { ToastService } from "../../../services/toast.service";
import { HttpService } from "../../../services/http.service";
var LoginComponent = (function () {
    function LoginComponent(userService, httpService, router, toastService) {
        this.userService = userService;
        this.httpService = httpService;
        this.router = router;
        this.toastService = toastService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.email + form.password);
        this.userService.login(form.email, form.password)
            .subscribe(function (resp) {
            console.log(JSON.stringify(resp));
            _this.router.navigate(['']);
        }, function (error) {
            console.log(error);
            _this.toastService.error(error);
        });
        return false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }),
    __metadata("design:paramtypes", [UserService,
        HttpService,
        Router,
        ToastService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/view/login_register/login/login.component.js.map