/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { GradeInfoDetailComponent } from './grade-info-detail.component';
describe('GradeInfoDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GradeInfoDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GradeInfoDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/grade-info-detail/grade-info-detail.component.spec.js.map