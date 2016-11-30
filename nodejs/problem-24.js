/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation
of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically,
we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/
var j = 0;

for (var i0 = 0; i0 < 10; i0++) {
    for (var i1 = 0; i1 < 10; i1++) {
        if ([i0].indexOf(i1) !== -1) continue;
        for (var i2 = 0; i2 < 10; i2++) {
            if ([i0,i1].indexOf(i2) !== -1) continue;
            for (var i3 = 0; i3 < 10; i3++) {
                if ([i0,i1,i2].indexOf(i3) !== -1) continue;
                for (var i4 = 0; i4 < 10; i4++) {
                    if ([i0,i1,i2,i3].indexOf(i4) !== -1) continue;
                    for (var i5 = 0; i5 < 10; i5++) {
                        if ([i0,i1,i2,i3,i4].indexOf(i5) !== -1) continue;
                        for (var i6 = 0; i6 < 10; i6++) {
                            if ([i0,i1,i2,i3,i4,i5].indexOf(i6) !== -1) continue;
                            for (var i7 = 0; i7 < 10; i7++) {
                                if ([i0,i1,i2,i3,i4,i5,i6].indexOf(i7) !== -1) continue;
                                for (var i8 = 0; i8 < 10; i8++) {
                                    if ([i0,i1,i2,i3,i4,i5,i6,i7].indexOf(i8) !== -1) continue;
                                    for (var i9 = 0; i9 < 10; i9++) {
                                        if ([i0,i1,i2,i3,i4,i5,i6,i7,i8].indexOf(i9) !== -1) continue;
                                        if (++j === 1000000) {
                                            console.log('' + i0 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9);
                                            process.exit();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
