/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AssignmentListComponent } from './assignment-list.component';
describe('AssignmentListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AssignmentListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AssignmentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/assignment-list/assignment-list.component.spec.js.map