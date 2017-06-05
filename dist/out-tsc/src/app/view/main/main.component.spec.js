/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
describe('MainComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MainComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/view/main/main.component.spec.js.map