#!/usr/bin/python
##
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
# real	0m46.693s
# user	0m46.628s
# sys	0m0.041s

def is_divisible(num):
    if num % 11 != 0: return False
    if num % 12 != 0: return False
    if num % 13 != 0: return False
    if num % 14 != 0: return False
    if num % 15 != 0: return False
    if num % 16 != 0: return False
    if num % 17 != 0: return False
    if num % 18 != 0: return False
    if num % 19 != 0: return False
    if num % 20 != 0: return False
    return True

i = 20
while is_divisible(i) == False:
    i += 1

print(i)
