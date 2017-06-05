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
import { AssignmentService } from "../../services/assignment.service";
var EditAssignmentComponent = (function () {
    function EditAssignmentComponent(assignmentService) {
        this.assignmentService = assignmentService;
    }
    EditAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignmentService.getAllAssignmentList().subscribe(function (assignmentList) {
            _this.assignmentList = assignmentList;
        });
    };
    EditAssignmentComponent.prototype.selectAssignment = function (assignmentId) {
        this.selectAssignmentId = assignmentId;
    };
    EditAssignmentComponent.prototype.nextQuestion = function () {
        this.assignmentService.changeIndex.next(true);
    };
    EditAssignmentComponent.prototype.preQuestion = function () {
        this.assignmentService.changeIndex.next(false);
    };
    return EditAssignmentComponent;
}());
EditAssignmentComponent = __decorate([
    Component({
        selector: 'app-edit-assignment',
        templateUrl: 'edit-assignment.component.html',
        styleUrls: ['edit-assignment.component.css']
    }),
    __metadata("design:paramtypes", [AssignmentService])
], EditAssignmentComponent);
export { EditAssignmentComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/edit-assignment/edit-assignment/edit-assignment.component.js.map