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
import { ActivatedRoute } from "@angular/router";
import { ToastService } from "../../services/toast.service";
import { AssignmentService } from "../../services/assignment.service";
var AssignmentListComponent = (function () {
    function AssignmentListComponent(route, toastService, assignmentService) {
        this.route = route;
        this.toastService = toastService;
        this.assignmentService = assignmentService;
    }
    AssignmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.classId);
        this.assignmentService.getAssignmentList(this.classId)
            .subscribe(function (assignmentInfoList) {
            console.log(assignmentInfoList);
            console.log(JSON.stringify(assignmentInfoList));
            _this.assignmentInfoList = assignmentInfoList;
        }, function (error) { console.log(error); });
    };
    return AssignmentListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AssignmentListComponent.prototype, "classId", void 0);
AssignmentListComponent = __decorate([
    Component({
        selector: 'app-assignment-list',
        templateUrl: 'assignment-list.component.html',
        styleUrls: ['assignment-list.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ToastService,
        AssignmentService])
], AssignmentListComponent);
export { AssignmentListComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/assignment-list/assignment-list.component.js.map