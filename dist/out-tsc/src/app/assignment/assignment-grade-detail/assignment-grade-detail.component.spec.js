/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AssignmentGradeDetailComponent } from './assignment-grade-detail.component';
describe('AssignmentGradeDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AssignmentGradeDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AssignmentGradeDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/assignment-grade-detail/assignment-grade-detail.component.spec.js.map