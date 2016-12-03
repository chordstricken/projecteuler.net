/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

Note:
http://mathforum.org/library/drmath/view/67018.html
This problem can be simplified/adjusted using number theory.
Using: 10^d - 1

Where:
d is the length of the recurring cycle
k is a positive integer

calculate the smallest value of d for which the result is equally divisble by n.
*/



var n = 1,
    d = 2,
    chain = [],
    num = 0,
    max = 0;

while (d < 1000) {
    n = n % d;

    // test for repetition or end of the chain
    if (chain.indexOf(n) !== -1 || n === 0) {

        if (chain.length > max) {
            max = chain.length;
            num = d;
        }

        // reset and increment d
        chain = [];
        n = 1;
        d++;

    } else {
        chain.push(n);
        n *= 10;
    }

}
console.log(num);
