/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { GradeInfoItemDetailComponent } from './grade-info-item-detail.component';
describe('GradeInfoItemDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GradeInfoItemDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GradeInfoItemDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/grade-info-item-detail/grade-info-item-detail.component.spec.js.map