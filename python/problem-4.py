#!/usr/bin/python
##
# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

import math

a = 999
b = 999
p = []

def is_pal(num):
    s = str(num)
    m = int(math.ceil(len(s) / 2))
    for i in range(0, m):
        j = -1 - i
        if s[i] != s[j]: return False

    return True

while a > 99:
    if is_pal(a * b):
        p.append(a * b)

    if a == 100:
        b -= 1
        a = b
    else:
        a -= 1

p.sort()
print p
