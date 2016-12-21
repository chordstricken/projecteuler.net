/*
Take the number 192 and multiply it by each of 1, 2, and 3:
192 × 1 = 192  |  192 × 2 = 384  |  192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645,
which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

*/
var factorial = require('factorial')

class PermutationGenerator {
    constructor(base) {
        this.base = new Array(base).fill(0).map(function(value, index) {
            return index + 1;
        });
        this.index = 0
        this.maxIndex = factorial(base) - 1
    }

    get() {
        var result  = ''
        var numList = this.base.slice(0)
        var k       = this.index

        for (var j = this.base[this.base.length - 1] - 1; j >= this.base[0] - 1; j--) {
            var n = parseInt(k / factorial(j))
            result += numList[n]
            k -= n * factorial(j)
            numList.splice(n, 1)
        }
        return result
    }

    next() {
        this.index = this.index === this.maxIndex ? 0 : this.index + 1
        return this.get()
    }

    prev() {
        this.index = this.index === 0 ? this.maxIndex : this.index - 1
        return this.get()
    }


}

function satisfiesRule(num) {
    return num.substr(0, 4) * 2 == num.substr(-5)
}

var perm = new PermutationGenerator(9)
var curr = perm.get()
while (curr = perm.prev()) {
    if (satisfiesRule(curr)) {
        console.log(curr)
        process.exit()
    }
}
