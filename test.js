let assert = require('assert');
let formatTime = require('./challenge1');
describe('formatTime', function() {
    it('should return 1 minute and 30 seconds', function() {
        assert.equal(formatTime(90), '1 minute and 30 seconds');
        });
    it('should return 33 hours, 57 minutes and 45 seconds', function() {
        assert.equal(formatTime(122265), '33 hours, 57 minutes and 45 seconds')
    });
})