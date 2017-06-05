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
import { AssignmentService } from "../../services/assignment.service";
var EditQuestionListComponent = (function () {
    function EditQuestionListComponent(assignmentService) {
        this.assignmentService = assignmentService;
    }
    EditQuestionListComponent.prototype.ngOnInit = function () {
    };
    EditQuestionListComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.assignmentService.getQuestionListByAssignment(this.assignmentId)
            .subscribe(function (questionList) {
            console.log(questionList);
            _this.questionList = questionList;
        });
    };
    return EditQuestionListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], EditQuestionListComponent.prototype, "assignmentId", void 0);
EditQuestionListComponent = __decorate([
    Component({
        selector: 'app-edit-question-list',
        templateUrl: 'edit-question-list.component.html',
        styleUrls: ['edit-question-list.component.css']
    }),
    __metadata("design:paramtypes", [AssignmentService])
], EditQuestionListComponent);
export { EditQuestionListComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/edit-assignment/edit-question-list/edit-question-list.component.js.map