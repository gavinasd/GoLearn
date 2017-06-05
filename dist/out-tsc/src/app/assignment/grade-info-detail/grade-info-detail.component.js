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
import { AssignmentInfo } from "../../models/models";
var GradeInfoDetailComponent = (function () {
    function GradeInfoDetailComponent() {
    }
    GradeInfoDetailComponent.prototype.ngOnInit = function () {
        console.log(this.assignmentInfo);
    };
    return GradeInfoDetailComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", AssignmentInfo)
], GradeInfoDetailComponent.prototype, "assignmentInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], GradeInfoDetailComponent.prototype, "classId", void 0);
GradeInfoDetailComponent = __decorate([
    Component({
        selector: 'app-grade-info-detail',
        templateUrl: './grade-info-detail.component.html',
        styleUrls: ['./grade-info-detail.component.css']
    }),
    __metadata("design:paramtypes", [])
], GradeInfoDetailComponent);
export { GradeInfoDetailComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/grade-info-detail/grade-info-detail.component.js.map