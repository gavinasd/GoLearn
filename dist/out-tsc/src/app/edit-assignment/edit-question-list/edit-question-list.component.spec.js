/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { EditQuestionListComponent } from './edit-question-list.component';
describe('EditQuestionListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditQuestionListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditQuestionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/edit-assignment/edit-question-list/edit-question-list.component.spec.js.map