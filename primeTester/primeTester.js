/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

//loop 2 through up to n
	//check if n modulo by i to not equal 0
		//isPrime = true;
	//else
		//isPrime = false;
//return isPrime


var primeTester = function(n) {
	let isPrime = false;
	if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
	  // n isn't a number or n is less than 1 or n is not an integer
	  return isPrime;
	}
	if (n === 2) {
	    return true;
	}

	for (var i = 2; i < n; i++) {
		if (n % i !== 0) {
			isPrime = true;
		} else {
			isPrime = false;
			return isPrime;
		}
	}
	return isPrime;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
	let primeNums = [];
	for (var i = start; i <= end; i++) {
		if (primeTester(i)) {
			primeNums.push(i);
		}
	}
	return primeNums;
};














