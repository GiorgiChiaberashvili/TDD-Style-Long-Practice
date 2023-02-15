const chai = require('chai')

const expect = chai.expect

const reverseString = require(`../problems/reverse-string`)

describe('reverseString', function () {
    it('returns reversed string', function () {
        expect(reverseString('fun')).to.equal("nuf")
    });

    it(`should throw Type Error if string is not passed in`, () => {
        expect(() => reverseString(7)).to.throw(TypeError, "Expected a string")
    });
});


// Your code here
