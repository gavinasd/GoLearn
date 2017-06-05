var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../services/http.service";
import { ToastService } from "../../services/toast.service";
import { AssignmentService } from "../../services/assignment.service";
var AssignmentNavComponent = (function () {
    function AssignmentNavComponent(router, httpService, assignmentService, toastService) {
        this.router = router;
        this.httpService = httpService;
        this.assignmentService = assignmentService;
        this.toastService = toastService;
    }
    AssignmentNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userType = Number(this.httpService.getUserType()); //把string转成number
        if (this.userType == 1) {
            this.assignmentService.getAllAssignmentList().subscribe(function (assignmentList) {
                _this.assignmentList = assignmentList;
            });
        }
    };
    AssignmentNavComponent.prototype.addAssignment = function (form) {
        var _this = this;
        console.log(form.assignment);
        this.assignmentService.addAssignmentToClass(this.classId, form.assignment)
            .subscribe(function (json) {
            document.getElementById('closeModal').click();
            _this.toastService.success("成功添加作业");
        }, function (err) {
            document.getElementById('closeModal').click();
            _this.toastService.error(err);
        });
    };
    AssignmentNavComponent.prototype.searchClass = function (form) {
        console.log(form.classForSearch);
        this.router.navigate(['/class/search', form.classForSearch]);
    };
    AssignmentNavComponent.prototype.logout = function () {
        this.httpService.logout();
        this.router.navigate(['/login_register']);
    };
    return AssignmentNavComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AssignmentNavComponent.prototype, "classId", void 0);
AssignmentNavComponent = __decorate([
    Component({
        selector: 'app-assignment-nav',
        templateUrl: './assignment-nav.component.html',
        styleUrls: ['./assignment-nav.component.css']
    }),
    __metadata("design:paramtypes", [Router, HttpService,
        AssignmentService, ToastService])
], AssignmentNavComponent);
export { AssignmentNavComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/assignment-nav/assignment-nav.component.js.map