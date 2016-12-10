/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8,
which is correct, is obtained by cancelling the 9s.
We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

var result = 1;
for (var numerator = 1; numerator < 10; numerator++) {
    for (var denominator = 1; denominator < 10; denominator++) {
        if (numerator >= denominator) continue;

        var value = numerator / denominator;

        for (var i = 1; i < 10; i++) {
            var testNum = numerator + (i * 10),
                testDen = (denominator * 10) + i;

            if (value === testNum / testDen) result *= value;

            var testNum = (numerator * 10) + i,
                testDen = denominator + (i * 10);

            if (value === testNum / testDen) result *= value;
        }
    }
}

console.log(1 / result);
