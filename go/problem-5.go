/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * real	0m0.785s
 * user	0m0.835s
 * sys	0m0.048s
 */

package main

import (
    "fmt"
)

func main() {
    i := 20
    for is_divisible(i) == false {
        i += 1
    }

    fmt.Print(i)
}

func is_divisible(num int) bool {
    if num % 11 != 0 { return false }
    if num % 12 != 0 { return false }
    if num % 13 != 0 { return false }
    if num % 14 != 0 { return false }
    if num % 15 != 0 { return false }
    if num % 16 != 0 { return false }
    if num % 17 != 0 { return false }
    if num % 18 != 0 { return false }
    if num % 19 != 0 { return false }
    if num % 20 != 0 { return false }
    return true
}
