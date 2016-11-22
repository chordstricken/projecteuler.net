/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * real	0m1.027s
 * user	0m1.022s
 * sys	0m0.002s
 */

#include<stdio.h>


int is_divisible(int num) {
    if (num % 11 != 0) { return 0; }
    if (num % 12 != 0) { return 0; }
    if (num % 13 != 0) { return 0; }
    if (num % 14 != 0) { return 0; }
    if (num % 15 != 0) { return 0; }
    if (num % 16 != 0) { return 0; }
    if (num % 17 != 0) { return 0; }
    if (num % 18 != 0) { return 0; }
    if (num % 19 != 0) { return 0; }
    if (num % 20 != 0) { return 0; }
    return 1;
}

int main() {
    int i = 20;
    // int check = ;
    while (is_divisible(i) == 0) {
        i = i + 1;
        // check = is_divisible(i);
    }

    printf("%i", i);
    printf("\n");
    return 0;
}
