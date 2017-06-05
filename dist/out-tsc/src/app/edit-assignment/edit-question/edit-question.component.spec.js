/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { EditQuestionComponent } from './edit-question.component';
describe('EditQuestionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditQuestionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/edit-assignment/edit-question/edit-question.component.spec.js.map