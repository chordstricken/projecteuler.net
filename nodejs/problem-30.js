/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/
function qualifies(num) {
    var numbers = num.toString(),
        sum = 0;

    for (var n in numbers)
        sum += Math.pow(numbers[n], 5);

    return sum === num;
}

var sum = 0,
    max = 5 * Math.pow(9, 5);
for (var i = 2; i <= max; i++)
    if (qualifies(i)) sum += i;

console.log(sum);
