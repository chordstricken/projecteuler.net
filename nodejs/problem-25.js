/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

var f = [[0],[1]];

// adds two numeric arrays
function add(num1, num2) {
    var result = new Array(Math.max(num1.length, num2.length)).fill(0);

    var c = 0; // carry var

    while (num1.length < num2.length) num1.unshift(0); // ensure both numeric arrays have same length

    // iterate backwards over array
    for (var i = result.length - 1; i >= 0; i--) {
        result[i] += (num1[i] || 0) + (num2[i] || 0) + c;
        c = result[i] >= 10;
        result[i] = result[i] % 10; // perform modulo to set back to a single digit
    }

    if (c) result.unshift(1); // add carry int to the result array

    return result;
}

var curr, i = 2; // start at index 2
do {
    curr = add(f[i - 2], f[i - 1]);
    f.push(curr);

} while (curr.length < 1000 && i++)

console.log(curr.join(''), i);
