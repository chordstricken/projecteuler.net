/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function isPandigital() {
    var numString = Array.from(arguments).join('');
    if (numString.length !== 9) return false;
    var checklist = {'0': true};
    for (var i = 0; i < numString.length; i++) {
        if (checklist[numString[i]] === true) return false;
        checklist[numString[i]] = true;
    }
    return true;
}

var pandigitalNumbers = {},
    resultTotal = 0;


for (var a = 1; a < 100; a++) {
    for (var b = 100; b < 10000; b++) {
        var product = a * b;
        if (pandigitalNumbers[product] === undefined && isPandigital(a, b, product)) {
            pandigitalNumbers[product] = true;
            resultTotal += product;
        }
    }
}

console.log(resultTotal);
