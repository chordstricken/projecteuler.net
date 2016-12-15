/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right,
and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/
const Primes = require('primes')(1000000).reduce((obj, num) => {
    obj[num] = true
    return obj
}, {});

function isTruncatable(num) {
    num = num.toString()
    if (num.length === 1) return false
    for (var i = 1; i < num.length; i++) {
        if (Primes[num.substr(0, i)] === undefined) return false // check right trim
        if (Primes[num.substr(i)] === undefined) return false // check left trim
    }
    return true
}

var sum = 0
for (var prime in Primes)
    if (isTruncatable(prime)) sum += new Number(prime)

console.log(sum)
