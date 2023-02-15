const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe(`returnsThree()`, function () {
    it(`should return 3`, function () {
        expect(returnsThree()).to.equal(3)
    });
});

describe(`reciprocal(n)`, function () {
    context(`valid arguments`, function () {
        it(`should return reciprocal of a n`), function () {
            expect(reciprocal(5)).to.equal(0.2)
        }

        it(`should work with decimals`, function () {
            expect(reciprocal(2.5)).to.equal(0.4)
        })
    });

    context("arguments are too large or small (less than 1 or greater than 1,000,000)", function () {
        it("should throw a TypeError", function () {
            expect(() => reciprocal(0.5)).to.throw(TypeError, "Number must be greater than or equal to 1");
            expect(() => reciprocal(10000000)).to.throw(TypeError, "Number must be less than or equal to 1,000,000");
        });
    }
    );
});
// Your code here
