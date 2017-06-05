/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SearchResultItemComponent } from './search-result-item.component';
describe('SearchResultItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SearchResultItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchResultItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/search-class/search-result-item/search-result-item.component.spec.js.map