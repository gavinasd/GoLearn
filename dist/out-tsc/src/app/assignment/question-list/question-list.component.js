var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ResponseToQuestion } from "../../models/models";
import { HttpService } from "../../services/http.service";
import { AssignmentService } from "../../services/assignment.service";
import { ToastService } from "../../services/toast.service";
var QuestionListComponent = (function () {
    function QuestionListComponent(route, toastService, httpService, assignmentService, elementRef) {
        var _this = this;
        this.route = route;
        this.toastService = toastService;
        this.httpService = httpService;
        this.assignmentService = assignmentService;
        this.elementRef = elementRef;
        this.route.params.forEach(function (param) {
            _this.classId = param['classId'];
            _this.assignmentId = param['assignmentId'];
        });
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignmentService.getQuestionListByAssignment(this.assignmentId);
        this.assignmentService.questionList.subscribe(function (questionList) {
            _this.questionListLength = questionList.length;
        });
        this.assignmentService.getAssignmentName(this.assignmentId)
            .subscribe(function (assignmentName) {
            console.log("assignmentName", assignmentName);
            _this.assignmentName = assignmentName;
        }, function (err) {
            console.log(err);
        });
        this.assignmentService.index.subscribe(function (index) {
            console.log("index", "subscribe:" + index);
            _this.index = index;
        });
    };
    QuestionListComponent.prototype.nextQuestion = function () {
        this.confirmAnswer(this.answer);
        this.assignmentService.changeIndex.next(true);
    };
    QuestionListComponent.prototype.preQuestion = function () {
        this.assignmentService.changeIndex.next(false);
    };
    QuestionListComponent.prototype.changeAnswer = function (answer) {
        this.answer = answer;
    };
    QuestionListComponent.prototype.confirmAnswer = function (answer) {
        var _this = this;
        if (!answer || answer.length == 0) {
            return;
        }
        var response = new ResponseToQuestion({
            creator: this.httpService.getCurrentId(),
            class: this.classId,
            assignment: this.assignmentId,
            question: this.assignmentService.currentQuestionId,
            content: answer
        });
        console.log(response);
        this.assignmentService.addResponseToQuestion(response)
            .subscribe(function (response) {
            //因为已经向后台提交了新的数据，所以应该重新拉一次数据
            //this.assignmentService.refreshQuestionList(this.assignmentId);
        }, function (error) {
            console.log(error);
            _this.toastService.error(error);
        });
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    Component({
        selector: 'app-question-list',
        templateUrl: 'question-list.component.html',
        styleUrls: ['question-list.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ToastService,
        HttpService,
        AssignmentService,
        ElementRef])
], QuestionListComponent);
export { QuestionListComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/question-list/question-list.component.js.map