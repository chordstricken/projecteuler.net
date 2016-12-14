/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

// create a hash map of primes
var primes = require('primes')(1000000).reduce(function(map, curr) {
    map[curr] = true;
    return map;
}, {});

function rotateNumString(numString) {
    return '' + numString[numString.length - 1] + numString.slice(0, -1);
}

function isPrime(num) {
    return primes[num] !== undefined;
}

var circularPrimes = {};
for (var num in primes) {
    if (circularPrimes[num] !== undefined) continue;

    var numString = num.toString(),
        rNumString = numString,
        circle = [numString];

    do {
        rNumString = rotateNumString(rNumString);
        if (isPrime(rNumString))
            circle.push(rNumString);
        else circle = false;


    } while (rNumString !== numString && circle)

    if (circle)
        for (var i in circle)
            circularPrimes[circle[i]] = true;

}

console.log(Object.keys(circularPrimes).length);
