/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

var target = 200,
    coins = [1, 2, 5, 10, 20, 50, 100, 200],
    combos = new Array(target + 1).fill(0);

combos[0] = 1;

// iterate over each coin
for (var i = 0; i < coins.length; i++)
    // add values for each previous coin
    for (var j = coins[i]; j <= target; j++)
        combos[j] += combos[j - coins[i]];

console.log(combos.pop());
