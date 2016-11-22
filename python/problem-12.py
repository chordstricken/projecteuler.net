#!/usr/bin/python
import math


def divisorGenerator(n):
    large_divisors = []
    num = 0
    for i in xrange(1, int(math.sqrt(n) + 1)):
        if n % i == 0:
            num += 1
            if i*i != n:
                large_divisors.append(n / i)
    for divisor in reversed(large_divisors):
        num += 1

    return num


i = 1
c_number = 0
c_factor = 0
max_factor = 0

while c_factor < 500:
    c_number += i
    c_factor = divisorGenerator(c_number)
    if c_factor > max_factor:
        max_factor = c_factor
        print max_factor

    i += 1

print c_number
