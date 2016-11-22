#!/usr/bin/python
# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
# a^2 + b^2 = c^2
# Find the sum of the pythagorean triplet of which a + b + c = 1000
import sys

for a in range(1, 1000):
    for b in range(1, 1000):

        a2 = a ** 2
        b2 = b ** 2
        c2 = a2 + b2
        c  = c2 ** 0.5

        if a + b + c == 1000:
            print a * b * c
            sys.exit(0)
