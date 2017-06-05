/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ClassUserListComponent } from './class-user-list.component';
describe('ClassUserListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClassUserListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ClassUserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/assignment/class-user-list/class-user-list.component.spec.js.map