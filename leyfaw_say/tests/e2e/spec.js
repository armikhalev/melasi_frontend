'use strict';

describe('The main view', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost/static/leyfaw_say/main.html');

    });

    it('Find title', function () {
        expect(browser.driver.getTitle()).toEqual('Leyfaw de Mela');
    });
});
