var assert = require('assert');
before(function () {
    console.log('root level before');
});

after(function () {
    console.log('root level after');
});

// describe('Array', function() {
  describe('Array#indexOf()', function() {
    before(function() {
        // runs before all tests in this block
        console.log('test suits level before');
    });

    after(function() {
        // runs after all tests in this block
        console.log('test suits level after');
    });

    beforeEach(function() {
        // runs before each test in this block
        console.log('test level beforeEach');
    });

    afterEach(function() {
        // runs after each test in this block
        console.log('test level afterEach');
    });

    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it('should not return -1 when the value is present', function(){
        assert.notEqual(-1, [1,2,3].indexOf(3));
    });
  });
// });

describe('My app', function () {
    it('should login with email: xxx, password: xxx', async function () {
        const response = await loginApi({
            email: 'xxx',
            password: 'xxx'
        });
        assert.equal(true, response.data.success);
    });
});
