/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

real	0m0.067s
user	0m0.050s
sys	    0m0.014s
*/

/**
 * Equivalent of Math.pow() except the number is expressed as an array of single digits
 */
function pow(n, p, o) {
    if (p === 1) return n;

    o = o || n[0]; // original value. this will be 2
    var c = 0; // carry flag
    // iterate backwards
    for (var i = n.length - 1; i >= 0; i--) {
        n[i] *= o; // multiply by original value

        // add carry bit
        n[i] += c;
        c = 0;

        // perform mod10 and add carry bit
        if (n[i] >= 10) {
            n[i] %= 10;
            c = 1;
        }
    }

    if (c === 1) n.unshift(1); // append carry bit if it exists

    return pow(n, --p, o);
}

// do the first step -- calculating the actual number as an array
var n = pow([2], 1000);

// sum up all of the numbers
n = n.reduce(function(a, b) {
    return a + b;
}, 0);

// done!
console.log(n);
