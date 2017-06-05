var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAssignmentComponent } from "./edit-assignment/edit-assignment.component";
import { EditQuestionComponent } from "./edit-question/edit-question.component";
import { EditQuestionListComponent } from "./edit-question-list/edit-question-list.component";
import { EditTporeadingQuestionComponent } from "./edit-tporeading-question/edit-tporeading-question.component";
import { AssignmentService } from "../services/assignment.service";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
var EditAssignmentModule = (function () {
    function EditAssignmentModule() {
    }
    return EditAssignmentModule;
}());
EditAssignmentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            FormsModule
        ],
        declarations: [
            EditAssignmentComponent,
            EditQuestionComponent,
            EditQuestionListComponent,
            EditTporeadingQuestionComponent
        ],
        providers: [
            AssignmentService
        ]
    })
], EditAssignmentModule);
export { EditAssignmentModule };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/edit-assignment/edit-assignment.module.js.map