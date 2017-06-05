var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TPOReadingQuestion } from "../../models/models";
var TpoReadingQuestionDetailComponent = (function () {
    function TpoReadingQuestionDetailComponent() {
        this.lastContent = []; //[questionId,content]列表
        this.onAnswerChanged = new EventEmitter();
    }
    TpoReadingQuestionDetailComponent.prototype.ngOnInit = function () {
    };
    TpoReadingQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        //先找到上一次做题的内容
        var thatLastContent = this.lastContent.find(function (lastContent) { return lastContent.questionId == _this.question.question; });
        if (!thatLastContent) {
            //内存里面并没有上次作答的内容，那么当前内容就是数据库中保存的内容
            this.answer = this.question.content;
        }
        else {
            this.answer = thatLastContent.content;
        }
        this.changeAnswer();
    };
    //学生的回答发生了改变
    TpoReadingQuestionDetailComponent.prototype.changeAnswer = function () {
        var _this = this;
        var hasContent = false;
        this.lastContent.forEach(function (lastContent) {
            if (lastContent.questionId == _this.question.question) {
                lastContent.content = _this.answer;
                hasContent = true;
            }
        });
        if (!hasContent) {
            this.lastContent.push(new LastContent(this.question.question, this.answer));
        }
        this.onAnswerChanged.emit(this.answer);
    };
    TpoReadingQuestionDetailComponent.prototype.convert09ToAz = function (i) {
        return String.fromCharCode(65 + i);
    };
    return TpoReadingQuestionDetailComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", TPOReadingQuestion)
], TpoReadingQuestionDetailComponent.prototype, "question", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TpoReadingQuestionDetailComponent.prototype, "onAnswerChanged", void 0);
TpoReadingQuestionDetailComponent = __decorate([
    Component({
        selector: 'app-tpo-reading-question-detail',
        templateUrl: 'tpo-reading-question-detail.component.html',
        styleUrls: ['tpo-reading-question-detail.component.css']
    }),
    __metadata("design:paramtypes", [])
], TpoReadingQuestionDetailComponent);
export { TpoReadingQuestionDetailComponent };
var LastContent = (function () {
    function LastContent(questionId, content) {
        this.questionId = questionId;
        this.content = content;
    }
    return LastContent;
}());
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/tpo-reading-question-detail/tpo-reading-question-detail.component.js.map