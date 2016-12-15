/*
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

var pSum = 1;

function isPalindrome(num) {
    num = num.toString()
    let len     = num.length
    let halfLen = Math.floor(len / 2)

    for (var i = 0; i <= halfLen; i++)
        if (num[i] !== num[len - i - 1]) return false;

    return true;
}

for (var i = 2; i < 1000000; i++)
    pSum += isPalindrome(i.toString()) && isPalindrome(i.toString(2)) ? i : 0;

console.log(pSum);
