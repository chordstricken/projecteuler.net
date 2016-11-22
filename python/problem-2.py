#!/usr/bin/python

max  = 4000000
curr   = 1
prev_1 = 1
prev_2 = 1
sum    = 0

while curr < max:
    prev_2 = prev_1
    prev_1 = curr

    if curr % 2 == 0:
        sum += curr

    curr = prev_1 + prev_2

print sum
