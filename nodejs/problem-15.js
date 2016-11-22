/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
real	0m0.061s
user	0m0.044s
sys 	0m0.014s
*/

var n = 20;
var ft_cache = {};

/**
 * Returns the factorial of the number
 */
function ft(num) {
    if (ft_cache[num])
        return ft_cache[num];
    var i, ft = 1;
    for (i = 2; i <= num; i++) {
        ft = ft * i;
        if (!ft_cache[i])
            ft_cache[i] = ft;
    }
    return ft;
}

var R = ft(2 * n) / (ft(n) * ft(n));
console.log(R);

/*
r r r d d d
r r d d d r
r r d d r d
r r d r d d
r d d d r r
r d d r d r
r d d r r d
r d d d r r
r d d r r d
r d r d r d
r d r d d r
r d r r d d
*/
