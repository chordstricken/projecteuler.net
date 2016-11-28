/*
Using ../problem-22.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
var fs = require('fs');

// sanitize the name
function sanitize(name) {
    return name.trim().replace(/(^"|"$)/g, '').toUpperCase();
}

// convert the name into a number
function numberify(name, id) {
    return (id + 1) * name.split('').reduce(function(total, letter) {
        return total += (letter.charCodeAt(0) - 64); // letter to number of alphabet based on charCode. Assume all upper case.
    }, 0);
}

// We'll do everything synchronously.
var result = fs.readFileSync('../data/problem-22.txt').toString().split(',').map(sanitize).sort().map(numberify).reduce(function(total, curr) {
    return total += curr;
}, 0);

console.log(result);
