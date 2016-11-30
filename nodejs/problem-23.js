/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that
28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant
if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as
the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater
than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced
any further by analysis even though it is known that the greatest number that cannot be expressed as the
sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/


var Primes = require('primes');

var max = 28123;
var abun = [];

// converts a string to an integer
function intval(value) {
    return parseInt(value);
}

// Creates a hash map of prime numbers and other obvious deficients
var skipMap = Primes(max).reduce(function(map, num) {
    map[num] = 1;
    return map;
}, {});

// creates a hashmap of abundant numbers
var abun = {};
for (var n = 12; n <= max; n++) {
    if (skipMap[n] === 1) continue;
    if (abun[n] === 1) continue; // already calculated

    var dSum = 1,
        nLimit = Math.ceil(n / 2) + 1;

    for (var mod = 2; mod <= nLimit; mod++)
        if (n % mod === 0)
            dSum += mod;

    if (n < dSum) {
        abun[n] = 1;

        // Every multiple of an abundant number is abundant.
        for (var n2 = n; n2 < max; n2 += n)
            abun[n2] = 1;
    }

}
delete skipMap; // clear some memory

abun = Object.keys(abun).map(intval); // convert the abundant hashmap into a flat array

// iterate through all 2-sum abundants
var abundantSums = {}, l, r;
for (l = 0; l < abun.length; l++)
    for (r = l; r < abun.length; r++)
        abundantSums[abun[l] + abun[r]] = 1;

var resultSum = 0, i;
for (i = 0; i <= max; i++)
    resultSum += abundantSums[i] === undefined ? i : 0;

console.log(resultSum);
