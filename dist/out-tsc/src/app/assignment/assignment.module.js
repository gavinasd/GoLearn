var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from "./question-list/question-list.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { AssignmentListComponent } from "./assignment-list/assignment-list.component";
import { TpoReadingQuestionDetailComponent } from "./tpo-reading-question-detail/tpo-reading-question-detail.component";
import { AssignmentService } from "../services/assignment.service";
import { HttpService } from "../services/http.service";
import { FormsModule } from "@angular/forms";
import { GradeInfoDetailComponent } from './grade-info-detail/grade-info-detail.component';
import { GradeInfoItemDetailComponent } from './grade-info-item-detail/grade-info-item-detail.component';
import { RouterModule } from "@angular/router";
import { QuestionHeaderComponent } from './question-header/question-header.component';
import { AssignmentGradeDetailComponent } from './assignment-grade-detail/assignment-grade-detail.component';
import { AssignmentNavComponent } from './assignment-nav/assignment-nav.component';
import { ClassUserListComponent } from './class-user-list/class-user-list.component';
var AssignmentModule = (function () {
    function AssignmentModule() {
    }
    return AssignmentModule;
}());
AssignmentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule,
        ],
        declarations: [
            QuestionListComponent,
            QuestionDetailComponent,
            AssignmentListComponent,
            TpoReadingQuestionDetailComponent,
            GradeInfoDetailComponent,
            GradeInfoItemDetailComponent,
            QuestionHeaderComponent,
            AssignmentGradeDetailComponent,
            AssignmentNavComponent,
            ClassUserListComponent,
        ],
        providers: [
            AssignmentService,
            HttpService
        ],
        exports: [
            AssignmentListComponent,
            QuestionListComponent,
            AssignmentNavComponent,
            ClassUserListComponent
        ]
    })
], AssignmentModule);
export { AssignmentModule };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/assignment.module.js.map