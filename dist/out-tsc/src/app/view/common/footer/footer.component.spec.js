/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
describe('FooterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/view/common/footer/footer.component.spec.js.map