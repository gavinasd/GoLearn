var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpService } from "./http.service";
var AssignmentService = (function () {
    function AssignmentService(httpService) {
        this.httpService = httpService;
        this.index = Observable.from([0]);
        this.changeIndex = new BehaviorSubject(false);
    }
    /**
     * 因为会使用assignmentService来存储一些内容，当assginment退出的时候，需要清理掉这些数据
     */
    AssignmentService.prototype.reset = function () {
        this.questionList = Observable.from([]);
        this.index = Observable.from([0]);
        this.changeIndex = new BehaviorSubject(false);
    };
    AssignmentService.prototype.getQuestionListByAssignment = function (assignmentId) {
        var _this = this;
        var url = environment.getAssignmentDetailUrl;
        url = url + '/' + this.httpService.getCurrentId() + '/' + assignmentId;
        var questionListLength = 0;
        this.changeIndex.next(false);
        this.questionList = this.httpService.makeGetWithToken(url)
            .map(function (resp) {
            var list = resp.json().results;
            questionListLength = list.length;
            return list;
        });
        this.index = this.changeIndex.scan(function (index, sign) {
            if (sign && index < questionListLength - 1) {
                index++;
            }
            else if (!sign && index > 0) {
                index--;
            }
            console.log("index", "change to:" + index);
            return index;
        }, 1);
        this.question = this.index.combineLatest(this.questionList, function (index, questionList) {
            if (questionList.length > 0) {
                return questionList[index];
            }
        });
        this.question.subscribe(function (question) {
            _this.currentQuestionId = question.question._id;
        });
        return this.questionList;
    };
    AssignmentService.prototype.addResponseToQuestion = function (response) {
        var url = environment.addResponseUrlToQuestionUrl;
        var body = JSON.stringify({
            'userId': response.creator,
            'classId': response.class,
            'assignmentId': response.assignment,
            'questionId': response.question,
            'content': response.content
        });
        return this.httpService.makePostWithToken(url, body)
            .map(function (resp) { return resp.json(); })
            .catch(HttpService.handleError);
    };
    AssignmentService.prototype.addQuestion = function (assignmentId, question) {
        var url = environment.addQuestionUrl;
        var body = JSON.stringify({
            assignmentId: assignmentId,
            question: question
        });
        console.log(body);
        return this.httpService.makePostWithToken(url, body)
            .map(function (resp) { return resp.json(); }).catch(HttpService.handleError);
    };
    AssignmentService.prototype.getAssignmentList = function (classId) {
        var url = environment.getAssignmentListUrl;
        var userId = this.httpService.getCurrentId();
        url = url + '/' + classId + '/' + userId;
        return this.httpService.makeGetWithToken(url)
            .map(function (resp) { return resp.json().gradeInfo; }).catch(HttpService.handleError);
    };
    AssignmentService.prototype.getAllAssignmentList = function () {
        var url = environment.getAllAssignmentListUrl;
        var userId = this.httpService.getCurrentId();
        url = url + '/' + userId;
        return this.httpService.makeGetWithToken(url)
            .map(function (resp) { return resp.json().assignmentList; }).catch(HttpService.handleError);
    };
    AssignmentService.prototype.getAssignmentName = function (assignmentId) {
        var url = environment.getAssignmentByIdUrl;
        url = url + '/' + assignmentId;
        console.log(url);
        return this.httpService.makeGetWithToken(url)
            .map(function (resp) { return resp.json().assignment.assignmentName; })
            .catch(HttpService.handleError);
    };
    AssignmentService.prototype.getAssignmentGradeDetail = function (assignmentId) {
        var url = environment.getAssignmentDetailUrl;
        url = url + '/' + this.httpService.getCurrentId() + '/' + assignmentId;
        return this.httpService.makeGetWithToken(url)
            .map(function (resp) { return resp.json().results; })
            .catch(HttpService.handleError);
    };
    AssignmentService.prototype.addAssignmentToClass = function (classId, assignmentId) {
        var url = environment.addAssignmentToClassUrl;
        var body = JSON.stringify({
            'userId': this.httpService.getCurrentId(),
            'classId': classId,
            'assignmentId': assignmentId
        });
        return this.httpService.makePostWithToken(url, body)
            .map(function (resp) { return resp.json(); })
            .catch(HttpService.handleError);
    };
    return AssignmentService;
}());
AssignmentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpService])
], AssignmentService);
export { AssignmentService };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/services/assignment.service.js.map