/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

 43 44 45 46 47 48 49
 42 21 22 23 24 25 26
 41 20  7  8  9 10 27
 40 19  6  1  2 11 28
 39 18  5  4  3 12 29
 38 17 16 15 14 13 30
 37 36 35 34 33 32 31

It can be verified that the sum of the numbers on the diagonals is 101. What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

var sum = 1;

for (var level = 3; level <= 1001; level += 2) {
    var square = Math.pow(level, 2);
    for (corner = 3; corner >= 0; corner--) {
        // calculating each corner can be summed up by the following 4 equations:
        // n^2, n^2-(n-1), n^2-(2(n-1)), n^2-(3(n-1))
        sum += square - (corner * (level - 1));
    }
}

console.log(sum);
