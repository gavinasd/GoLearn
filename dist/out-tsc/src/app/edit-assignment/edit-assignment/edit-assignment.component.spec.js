/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { EditAssignmentComponent } from './edit-assignment.component';
describe('EditAssignmentComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditAssignmentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditAssignmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/edit-assignment/edit-assignment/edit-assignment.component.spec.js.map