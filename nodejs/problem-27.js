/*
The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79.
The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/

var primes = require('primes')(2000000);
var primes1000 = primes.slice(0, 168);

// convert into hashmap for quick reference
primes = primes.reduce(function(obj, val) {
    obj[val] = true;
    return obj;
}, {}); // prime hashmap

var str, a, b,
    resultProduct = 0,
    maxLength = 0;

function isPrime(num) {
    return primes[num] === true;
}

// n^2 + an + b
function form(a, b, n) {
    return Math.pow(n, 2) + (a * n) + b;
}

// determines the maximum string of primes the given a/b combo provides
function checkPrimeString(a, b) {
    var n = 0;

    // check numbers until the primes stop
    while (isPrime(form(a, b, n))) n++

    if (n > maxLength) {
        maxLength = n;
        resultProduct = a * b;
    }
}

// checkPrimeString(-61, 971); process.exit();

// check all possibilities

for (a in primes1000) {
    for (b in primes1000) {
        checkPrimeString(primes1000[a], primes1000[b]);
        checkPrimeString(primes1000[a] * -1, primes1000[b]);
        checkPrimeString(primes1000[a], primes1000[b] * -1);
        checkPrimeString(primes1000[a] * -1, primes1000[b] * -1);
    }
}

console.log(resultProduct);
process.exit();
