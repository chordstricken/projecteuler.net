#!/usr/bin/python
##
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

factors = [600851475143]

""" Factors a number into two more numbers and returns the greater one """
def get_factors(num):
    curr = 2
    while curr < num:
        if num % curr == 0:
            return [curr, num / curr]
        curr += 1

    return False

while True:
    largest     = factors.pop(-1)
    new_factors = get_factors(largest)
    if new_factors == False:
        break

    factors.append(new_factors[0])
    factors.append(new_factors[1])
    factors.sort()

print largest
