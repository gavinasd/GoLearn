var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { HttpService } from "../../../services/http.service";
import { NgUploaderOptions } from "ngx-uploader";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";
var IndexComponent = (function () {
    function IndexComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.data = "abcd";
        this.options = new NgUploaderOptions({
            url: environment.addResourceUrl,
            data: {
                'userId': '5874f94ca19a0cdde8d78c48',
                'classId': '5874fa82a19a0cdde8d78c49'
            },
            autoUpload: false
        });
        this.events = new EventEmitter();
    }
    IndexComponent.prototype.ngOnInit = function () {
        if (!this.httpService.isLoggedIn()) {
            this.router.navigate(['/login']);
        }
    };
    IndexComponent.prototype.startUpload = function () {
        this.events.emit('startUpload');
    };
    IndexComponent.prototype.onSubmit = function (form) {
        this.startUpload();
        return false;
    };
    IndexComponent.prototype.handleUpload = function (data) {
        this.data = data;
        console.log(data);
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Component({
        selector: 'app-index',
        templateUrl: 'index.component.html',
        styleUrls: ['index.component.css']
    }),
    __metadata("design:paramtypes", [HttpService, Router])
], IndexComponent);
export { IndexComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/app/view/course/index/index.component.js.map