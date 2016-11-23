/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

// multiplies a num array
function multiply(num, times) {
    var result = new Array(num.length).fill(0);

    // add num to itself repeatedly
    while (times-- > 0) {
        // iterate backwards over array
        var c = 0;
        for (var i = num.length - 1; i >= 0; i--) {
            result[i] += num[i] + c;
            c = result[i] >= 10;
            result[i] = result[i] % 10; // perform modulo to set back to a single digit
        }
        if (c) {
            result.unshift(1); // add carry int to the result array
            num.unshift(0); // add 0 carry int to num array to ensure both arrays always have same length
        }
    }

    return result;
}

// performs a factorial function on a Number represented as an array.
// Note: This is not recursive due to call stack restrictions.
function factorial(n) {
    var nArray = n.toString().split('').map(function(num) {
        return parseInt(num);
    });

    for (var i = n; i > 0; i--) {
        nArray = multiply(nArray, i);
    }

    return nArray;
}

// add up all of the digits
var result = factorial(100).reduce(function(sum, curr) {
    return sum += curr;
}, 0);

console.log(factorial(100).join(''));

console.log(result);
