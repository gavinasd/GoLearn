/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { CourseListItemComponent } from './course-list-item.component';
describe('CourseListItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CourseListItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CourseListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/view/course/course-list-item/course-list-item.component.spec.js.map