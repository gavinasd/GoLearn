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
import { ClassInfo } from "../../../models/models";
var CourseListItemComponent = (function () {
    function CourseListItemComponent() {
    }
    CourseListItemComponent.prototype.ngOnInit = function () {
    };
    return CourseListItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", ClassInfo)
], CourseListItemComponent.prototype, "classInfo", void 0);
CourseListItemComponent = __decorate([
    Component({
        selector: 'app-course-list-item',
        templateUrl: 'course-list-item.component.html',
        styleUrls: ['course-list-item.component.css']
    }),
    __metadata("design:paramtypes", [])
], CourseListItemComponent);
export { CourseListItemComponent };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/view/course/course-list-item/course-list-item.component.js.map