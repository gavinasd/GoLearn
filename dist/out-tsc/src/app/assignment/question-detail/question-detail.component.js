var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { AssignmentService } from "../../services/assignment.service";
import { Question, TPOReadingQuestion } from "../../models/models";
var QuestionDetailComponent = (function () {
    function QuestionDetailComponent(assignmentService) {
        this.assignmentService = assignmentService;
        this.onAnswerChange = new EventEmitter();
        this.question = new Question();
        this.answer = "";
    }
    QuestionDetailComponent.prototype.ngOnDestroy = function () {
        this.assignmentService.reset();
    };
    QuestionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignmentService.question.subscribe(function (quest) {
            var question = quest.question;
            console.log(quest);
            console.log(question);
            switch (question.questionType) {
                case Question.TPO_READING_TYPE:
                    _this.question = new TPOReadingQuestion(question, quest.content);
                    console.log(_this.question);
                    break;
                default:
                    console.log("default");
                    _this.question = question;
            }
        });
    };
    QuestionDetailComponent.prototype.changeAnswer = function (content) {
        this.answer = content;
        this.onAnswerChange.emit(this.answer);
    };
    return QuestionDetailComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], QuestionDetailComponent.prototype, "onAnswerChange", void 0);
QuestionDetailComponent = __decorate([
    Component({
        selector: 'app-question-detail',
        templateUrl: 'question-detail.component.html',
        styleUrls: ['question-detail.component.css']
    }),
    __metadata("design:paramtypes", [AssignmentService])
], QuestionDetailComponent);
export { QuestionDetailComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/question-detail/question-detail.component.js.map