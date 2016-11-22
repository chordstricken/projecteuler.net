/*
The following iterative sequence is defined for the set of positive integers:

n -> n/2 (n is even)
n -> 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

real	0m0.841s
user	0m0.791s
sys	    0m0.053s

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var i,
    m = 1000000,
    l = {length: 0},
    dict = [0];

/**
 * Collatz calculation object
 */
 var Collatz = function(start) {
     this.start = start;
     this.length = 1;
     this.num = start;

     function increment(n) {
         return (n & 1) ? ((n * 3) + 1) : (n / 2);
     }

     while (this.num !== 1) {
        if (dict[this.num]) {
            this.length += dict[this.num].length;
            this.num = 1;
        } else {
            this.num = increment(this.num);
            this.length++;
        }
    }

    return {
        start: this.start,
        length: this.length,
        num: this.num,
    };
 }

 for (i = 1; i <= m; i++) {
     var c = Collatz(i);
     dict.push(c);

     if (c.length > l.length) {
         l = c;
     }
 }
console.log(l);
