describe('spiralTraversal Tests', function() {
	it('should return an array', function() {
		var result = spiralTraversal([
						      [1,2,3],
						      [4,5,6],
						      [7,8,9]
						    ]);
		expect(Array.isArray(result)).to.be.true;
	});

	it('should return array of values in spiral order', function() {
		var result = spiralTraversal([
						      [1,2,3],
						      [4,5,6],
						      [7,8,9]
						    ]);
		expect(result).to.eql([1, 2, 3, 6, 9, 8, 7, 4, 5]);
	});

	it('should work with 2d array of even length', function() {
		var result = spiralTraversal([
						      [1,2],
						      [4,5]
						    ]);
		expect(result).to.eql([1,2,5,4]);
	});

});