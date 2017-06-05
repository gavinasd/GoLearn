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
import { ActivatedRoute } from "@angular/router";
import { AssignmentService } from "../../services/assignment.service";
var AssignmentGradeDetailComponent = (function () {
    function AssignmentGradeDetailComponent(route, assignmentService) {
        var _this = this;
        this.route = route;
        this.assignmentService = assignmentService;
        this.route.params.forEach(function (param) {
            _this.assignmentId = param['assignmentId'];
        });
    }
    AssignmentGradeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignmentService.getAssignmentGradeDetail(this.assignmentId)
            .subscribe(function (results) {
            _this.gradeDetailList = results;
        });
    };
    return AssignmentGradeDetailComponent;
}());
AssignmentGradeDetailComponent = __decorate([
    Component({
        selector: 'app-assignment-grade-detail',
        templateUrl: './assignment-grade-detail.component.html',
        styleUrls: ['./assignment-grade-detail.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        AssignmentService])
], AssignmentGradeDetailComponent);
export { AssignmentGradeDetailComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/assignment-grade-detail/assignment-grade-detail.component.js.map