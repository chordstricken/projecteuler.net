/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

var factorialCache = {};
function factorial(num) {
    if (factorialCache[num] === undefined) {

        var sum = 1;
        for (var i = num; i > 1; i--)
            sum = sum * i;

        factorialCache[num] = sum;

    }
    return factorialCache[num];
}

function factorialSum(num) {
    return num.toString().split('').reduce(function(sum, curr) {
        return sum += factorial(curr);
    }, 0);
}

var max = factorial(9),
    sum = 0;
for (var n = 3; n < max; n++) {
    var fSum = factorialSum(n);
    if (fSum === n)
        sum += fSum;
}

console.log(sum);
