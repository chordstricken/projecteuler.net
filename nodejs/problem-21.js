/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

var M = 10000;

// d(n) function defined in description
function d(n) {
    var divisors = [1], mod;
    for (mod = 2; mod < n; mod++) {
        if (n % mod === 0) divisors.push(mod);
    }
    return divisors.reduce(function(total, curr) {
        return total += curr;
    }, 0);
}

var n,
    amicables = [],
    d_sums = {};

// find all divisors
for (n = M; n > 2; n--) {
    d_sums[n] = d(n);

    if (n !== d_sums[n] && d_sums[d_sums[n]] !== undefined && n === d_sums[d_sums[n]]) {
        amicables.push(d_sums[n]);
        amicables.push(d_sums[d_sums[n]]);
    }
}

var result = amicables.reduce(function(total, curr) {
    return total += curr;
}, 0);

console.log(result);
