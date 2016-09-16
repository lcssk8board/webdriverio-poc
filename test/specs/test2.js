var assert = require('assert');

describe('webdriver.io page', function() {
	
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://www.google.com.br');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
    });
	
	it('should be clicked', function(){
		browser.url('http://www.google.com.br');	
		browser.element('input[name=btnI]').click();
		var title = browser.getTitle();
        assert.equal(title, 'Google Doodles');
		browser.saveScreenshot('./snapshot.png');
	});
});