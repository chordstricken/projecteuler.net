#!/usr/bin/php
<?php
/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * real	0m14.432s
 * user	0m14.378s
 * sys	0m0.030s
 */
// echo 11 * 12 * 13 * 14 * 15 * 16 * 17 * 18 * 19 * 20 . PHP_EOL;

function is_divisible($num) {
    if ($num % 11 !== 0) return false;
    if ($num % 12 !== 0) return false;
    if ($num % 13 !== 0) return false;
    if ($num % 14 !== 0) return false;
    if ($num % 15 !== 0) return false;
    if ($num % 16 !== 0) return false;
    if ($num % 17 !== 0) return false;
    if ($num % 18 !== 0) return false;
    if ($num % 19 !== 0) return false;
    if ($num % 20 !== 0) return false;
    return true;
}

// 232792560
// $i = 232792559;
$i = 21;
while (!is_divisible($i)) {
    $i++;
}

print $i . PHP_EOL;
