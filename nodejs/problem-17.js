/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115
(one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

var cypher = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};

/**
 * Converts a Number into a written english string
 * does not support numbers above 9999
 */
function stringifyNumber(n) {
    var s = '',
        and = false;

    // calculate thousands
    if (n >= 1000) {
        var thousands = Math.floor(n / 1000);
        s += cypher[thousands] + 'thousand';
        n -= (thousands * 1000);
    }

    // calculate hundreds
    if (n >= 100) {
        var hundreds = Math.floor(n / 100);
        s += cypher[hundreds] + 'hundred';
        n -= (hundreds * 100);
        and = true;
    }

    var mod100 = n % 100;

    if (mod100 >= 20) {
        // calculate tens
        var mod10 = n % 10,
            tens  = cypher[Math.floor(mod100 / 10) * 10];

        s += and ? 'and' + tens : tens; // tens place, excluding teens
        s += cypher[mod10] || ''; // ones place

    } else {
        // calculate teens / ones
        if (cypher[mod100]) {
            s += and ? 'and' + cypher[mod100] : cypher[mod100];
        }
    }

    return s;
}

var nums = [];
for (var i = 1; i <= 1000; i++) {
    var number = stringifyNumber(i)
    console.log(i, number.length, number);
    nums.push(number);
}

nums = nums.reduce(function(a, b) {
    return a + b.length;
}, 0);

console.log(nums);
