"use strict";
var new_enrollment_page_1 = require('../pages/new-enrollment.page');
var enrollmentPage;
var originalTimeout;
beforeEach(function () {
    enrollmentPage = new new_enrollment_page_1.NewEnrollmentPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});
describe("check that header h1 text is member enrollment  ", function () {
    it("header h1 text", function () {
        enrollmentPage.maximizeWindow();
        enrollmentPage.getH1HeaderText().then(function (text) {
            console.log(text);
            expect(text).toContain("Enrollemnt New Member");
        });
    });
});
afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});
//# sourceMappingURL=new-enrollment.spec.js.map