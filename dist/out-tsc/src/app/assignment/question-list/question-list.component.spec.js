/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { QuestionListComponent } from './question-list.component';
describe('QuestionListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [QuestionListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QuestionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/question-list/question-list.component.spec.js.map