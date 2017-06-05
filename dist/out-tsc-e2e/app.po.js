"use strict";
var protractor_1 = require('protractor');
var ClouldClassPage = (function () {
    function ClouldClassPage() {
    }
    ClouldClassPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    ClouldClassPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return ClouldClassPage;
}());
exports.ClouldClassPage = ClouldClassPage;
//# sourceMappingURL=app.po.js.map