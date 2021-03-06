const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("Arithmetic/Geometric", function() {
	describe("check for invalid input", function() {
		it('should return "Argument is not an array"', function() {
			assert.equal(myApp.aritGeo('a string'), "Argument is not an Array");
		});

		it('should return "Argument is not an array"', function() {
			assert.equal(myApp.aritGeo(2), "Argument is not an Array");
		});

		it('should return "Your Array should contain only numbers"', function() {
			assert.equal(myApp.aritGeo([2,4,8,{},32]), "Your Array should contain only numbers");
		});
	});

	describe("check for valid input", function() {
		it("should return 0", function() {
			assert.equal(myApp.aritGeo([]), 0);
		});

		it('should return -1', function() {
			assert.equal(myApp.aritGeo([-1, 2, -4, -13, -8]), -1);
		});

		it('should return "Arithmetic"', function() {
			assert.equal(myApp.aritGeo([2, 4, 6, 8, 10]), "Arithmetic");
		});

		it('should return "Arithmetic"', function() {
			assert.equal(myApp.aritGeo([1, 3, 5, 7, 9]), "Arithmetic");
		});

		it('should return "Arithmetic"', function() {
			assert.equal(myApp.aritGeo([-1, -5, -9, -13, -17]), "Arithmetic");
		});

		it('should return "Geometric"', function() {
			assert.equal(myApp.aritGeo([1, 5, 25, 125, 625]), "Geometric");
		});

		it('should return "Geometric"', function() {
			assert.equal(myApp.aritGeo([2, -4, 8, -16, 32, -64]), "Geometric");
		});
	});
})